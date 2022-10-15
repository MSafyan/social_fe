import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ws } from './ws';
import { TestContext } from './TestContext';
import { Box, IconButton, TextField, Typography, Button } from '@mui/material';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

const Test = () => {
	const { id } = useParams();
	const {
		userName,
		userId,
		stream,
		shareScreen,
		watchStream,
		setScreenSharingId,
	} = useContext(TestContext);

	useEffect(() => {
		if (!stream) {
			ws.emit('join-room', { roomId: id, peerId: userId, userName });
			// shareScreen();
		}
	}, [userId, stream]);

	return (
		<Box
			className='flex flex-col min-h-screen'
			sx={{ display: 'flex', flexDirection: 'column' }}
		>
			<Box sx={{ backgroundColor: '#333', color: 'white', p: 1 }}>
				<Typography variant='body1'>Room id {id}</Typography>
			</Box>
			<Box
				sx={{
					display: 'grid',
					width: '100vw',
					height: '80vh',
					// gridTemplateAreas: "'user others chat'",
					// gridTemplateColumns: '2fr 1fr',
					gap: 1,
				}}
			>
				<Box>
					<Box sx={{ height: '80vh', margin: 'auto' }}>
						<VideoPlayer stream={stream} />
					</Box>
				</Box>
				{/* <Box sx={{ gridArea: 'others' }}>
					<TextField
						label='Outlined'
						variant='outlined'
						onChange={(val) => {
							setScreenSharingId(val.target.value);
						}}
					/>
					<Button variant='contained' onClick={() => watchStream()}>
						Watch Stream
					</Button>
				</Box> */}
			</Box>
			<Box
				className='fixed bottom-0 p-6 w-full flex items-center justify-center border-t-2 bg-white'
				sx={{
					height: '4rem',
					position: 'fixed',
					padding: 1,
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderTop: 2,
					backgroundColor: 'white',
				}}
			>
				<IconButton onClick={shareScreen}>
					<ScreenShareIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export const VideoPlayer = ({ stream }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current && stream) videoRef.current.srcObject = stream;
		// console.log(stream);
	}, [stream]);
	return (
		<video
			controls
			data-testid='peer-video'
			style={{ width: '100%', height: '100%' }}
			ref={videoRef}
			autoPlay
			muted={true}
		/>
	);
};

export const NameInput = () => {
	const { userName, setUserName } = useContext(TestContext);
	return (
		<input
			className='border rounded-md p-2 h-10 my-2 w-full'
			placeholder='Enter your name'
			onChange={(e) => setUserName(e.target.value)}
			value={userName}
		/>
	);
};

export default Test;

// import { useEffect, useRef, useState } from 'react';
// import Peer from 'peerjs';

// function App() {
// 	const [peerId, setPeerId] = useState('');
// 	const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
// 	const remoteVideoRef = useRef(null);
// 	const currentUserVideoRef = useRef(null);
// 	const peerInstance = useRef(null);

// 	useEffect(() => {
// 		const peer = new Peer();

// 		peer.on('open', (id) => {
// 			setPeerId(id);
// 		});

// 		peer.on('call', (call) => {
// 			var getUserMedia =
// 				navigator.getUserMedia ||
// 				navigator.webkitGetUserMedia ||
// 				navigator.mozGetUserMedia;

// 			getUserMedia({ video: true, audio: true }, (mediaStream) => {
// 				currentUserVideoRef.current.srcObject = mediaStream;
// 				currentUserVideoRef.current.play();
// 				call.answer(mediaStream);
// 				call.on('stream', function (remoteStream) {
// 					remoteVideoRef.current.srcObject = remoteStream;
// 					remoteVideoRef.current.play();
// 				});
// 			});
// 		});

// 		peerInstance.current = peer;
// 	}, []);

// 	const call = (remotePeerId) => {
// 		var getUserMedia =
// 			navigator.getUserMedia ||
// 			navigator.webkitGetUserMedia ||
// 			navigator.mozGetUserMedia;

// 		getUserMedia({ video: true, audio: true }, (mediaStream) => {
// 			currentUserVideoRef.current.srcObject = mediaStream;
// 			currentUserVideoRef.current.play();

// 			const call = peerInstance.current.call(remotePeerId, mediaStream);

// 			call.on('stream', (remoteStream) => {
// 				console.log('streamers stream');
// 				remoteVideoRef.current.srcObject = remoteStream;
// 				remoteVideoRef.current.play();
// 			});
// 		});
// 	};

// 	return (
// 		<div className='App'>
// 			<h1>Current user id is {peerId}</h1>
// 			<input
// 				type='text'
// 				value={remotePeerIdValue}
// 				onChange={(e) => setRemotePeerIdValue(e.target.value)}
// 			/>
// 			<button onClick={() => call(remotePeerIdValue)}>Call</button>
// 			<div>
// 				<video ref={currentUserVideoRef} />
// 			</div>
// 			<div>
// 				<video ref={remoteVideoRef} />
// 			</div>
// 		</div>
// 	);
// }

// export default App;
