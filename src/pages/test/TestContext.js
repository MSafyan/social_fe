import { createContext, useEffect, useState, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Peer from 'peerjs';
import Api from '../../api/api';

export const TestContext = createContext({
	userId: '',
	userName: '',
	setUserName: (userName) => {},
});

export const TestProvider = ({ children }) => {
	const [userId] = useState(localStorage.getItem('userId') || uuidV4());
	const [userName, setUserName] = useState(
		localStorage.getItem('userName') || ''
	);
	const [stream, setStream] = useState();
	const [screenSharingId, setScreenSharingId] = useState('');
	const peerInstance = useRef(null);

	useEffect(() => {
		localStorage.setItem('userName', userName);
	}, [userName]);

	useEffect(() => {
		localStorage.setItem('userId', userId);
	}, [userId]);

	useEffect(() => {
		const peer = new Peer(userId, {
			host: 'safyan-peerjs-server.herokuapp.com',
			port: 443,
			secure: true,
		});

		peerInstance.current = peer;
		console.log(peer._id);
		peer.on('call', (call) => {
			// receiver
			// debugger;
			const { userName, screenSharingId } = call.metadata;
			call.answer(stream);
			call.on('stream', (peerStream) => {
				console.log('receiver', peerStream);
			});
		});

		return () => {
			peer?.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stream]);

	const destoryConnection = () => {
		const myMediaTracks = stream.getTracks();
		myMediaTracks?.forEach((track) => {
			track.stop();
		});
		// socketInstance?.socket.disconnect();
		// this.myPeer.destroy();
	};

	const watchStream = (peerId) => {
		var Id = peerId || screenSharingId;
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream) => {
				console.log('Id', Id);

				const call = peerInstance.current.call(Id, stream, {
					metadata: {
						screenSharingId,
						userName: 'caller',
					},
				});
				// debugger;

				call.on('stream', (remoteStream) => {
					// debugger;
					console.log('streamers screen');
					setStream(remoteStream);
				});
			});
	};

	const shareScreen = async () => {
		if (screenSharingId) {
			destoryConnection();
			setScreenSharingId('');
			await Api.deleteStream();
		} else {
			navigator.mediaDevices.getDisplayMedia({}).then(async (stream) => {
				await Api.createStream({ peerId: peerInstance.current._id });
				setStream(stream);
				setScreenSharingId(peerInstance.current.id || '');
			});
		}
	};

	return (
		<TestContext.Provider
			value={{
				userId,
				userName,
				setUserName,
				stream,
				shareScreen,
				watchStream,
				setScreenSharingId,
			}}
		>
			{children}
		</TestContext.Provider>
	);
};
