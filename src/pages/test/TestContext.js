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
	const watcher = useRef(false);
	let audioTrack, videoTrack;

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
		peer.on('call', (call) => {
			call.answer(stream);
			call.on('stream', (peerStream) => {});
		});

		return () => {
			peer?.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stream]);

	const destoryConnection = () => {
		audioTrack?.stop();
		videoTrack?.stop();
		const myMediaTracks = stream?.getTracks();

		myMediaTracks?.forEach((track) => {
			track.stop();
		});
		// socketInstance?.socket.disconnect();
		// this.myPeer.destroy();
	};

	const createEmptyAudioTrack = () => {
		const ctx = new AudioContext();
		const oscillator = ctx.createOscillator();
		const dst = oscillator.connect(ctx.createMediaStreamDestination());
		oscillator.start();
		const track = dst.stream.getAudioTracks()[0];
		return Object.assign(track, { enabled: false });
	};

	const createEmptyVideoTrack = ({ width, height }) => {
		const canvas = Object.assign(document.createElement('canvas'), {
			width,
			height,
		});
		canvas.getContext('2d').fillRect(0, 0, width, height);

		const stream = canvas.captureStream();
		const track = stream.getVideoTracks()[0];

		return Object.assign(track, { enabled: false });
	};

	const watchStream = async (peerId) => {
		debugger;
		watcher.current = true;
		var Id = peerId || screenSharingId;
		const audioTrack = createEmptyAudioTrack();
		const videoTrack = createEmptyVideoTrack({ width: 640, height: 480 });
		const mediaStream = new MediaStream([audioTrack, videoTrack]);

		// const navStream = await navigator.mediaDevices.getUserMedia({
		// 	video: true,
		// 	audio: true,
		// });
		console.log('Id', Id);

		const call = peerInstance.current.call(Id, mediaStream, {
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
	};

	const stopSharing = async () => {
		debugger;
		destoryConnection();
		setScreenSharingId('');
		await Api.deleteStream();
	};

	const shareScreen = async () => {
		if (screenSharingId) {
			stopSharing();
		} else {
			var navStream = await navigator.mediaDevices.getDisplayMedia({
				video: true,
				audio: true,
			});
			// [videoTrack] = navStream.getVideoTracks();

			// const audioStream = await navigator.mediaDevices
			// 	.getUserMedia({ audio: true })
			// 	.catch((e) => {
			// 		throw e;
			// 	});
			// [audioTrack] = audioStream.getAudioTracks();
			// var newStream = new MediaStream([videoTrack, audioTrack]);
			var newStream = navStream;

			await Api.createStream({ peerId: peerInstance.current._id });
			setStream(newStream);
			setScreenSharingId(peerInstance.current.id || '');
			navStream.oninactive = () => {
				debugger;
				stopSharing();
			};
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
				screenSharingId,
				watcher,
				setScreenSharingId,
			}}
		>
			{children}
		</TestContext.Provider>
	);
};
