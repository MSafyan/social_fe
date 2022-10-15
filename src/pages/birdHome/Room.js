import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShareScreenButton } from './components/ShareScreeenButton';
import { VideoPlayer } from './components/VideoPlayer';
import { RoomContext } from './context/RoomContext';
import { NameInput } from './common/Name';
import { ws } from './ws';
import { UserContext } from './context/UserContext';
import { ChatContext } from './context/ChatContext';
import { Box, Typography } from '@mui/material';
import Api from '../../api/api';
export const Room = () => {
	const { id } = useParams();
	const {
		stream,
		screenStream,
		peers,
		shareScreen,
		screenSharingId,
		setRoomId,
	} = useContext(RoomContext);
	const { userName, userId } = useContext(UserContext);
	const { toggleChat, chat } = useContext(ChatContext);
	const [videos, setVideos] = useState([]);

	const apiCall = async () => {
		const res = await Api.getStream();
		console.log(res.data.data);
		setVideos(res.data.data);
	};
	// useEffect(() => {
	// 	apiCall();
	// }, []);

	useEffect(() => {
		if (stream) ws.emit('join-room', { roomId: id, peerId: userId, userName });
	}, [id, userId, stream, userName]);

	useEffect(() => {
		setRoomId(id || '');
	}, [id, setRoomId]);

	const screenSharingVideo =
		screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

	const { [screenSharingId]: sharing, ...peersToShow } = peers;
	return (
		<Box
			className='flex flex-col min-h-screen'
			sx={{ display: 'flex', flexDirection: 'column' }}
		>
			<Box sx={{ backgroundColor: '#333', color: 'white', p: 1 }}>
				Room id {id}
			</Box>
			<Box
				sx={{
					display: 'grid',
					width: '100vw',
					height: '80vh',
					gridTemplateAreas: "'user others chat'",
					gridTemplateColumns: '4fr 1fr 1fr',
					gap: 1,
				}}
			>
				{screenSharingVideo ? (
					<Box sx={{ gridArea: 'user' }}>
						<Typography variant='h4' color='white'>
							Sharig
						</Typography>
						<VideoPlayer stream={screenSharingVideo} />
					</Box>
				) : (
					<Box sx={{ gridArea: 'user' }}>
						{screenSharingId !== userId && (
							<Box sx={{ height: '70vh' }}>
								<VideoPlayer stream={stream} />
								<NameInput />
							</Box>
						)}
					</Box>
				)}

				{/* <Box sx={{ gridArea: 'others' }}>
					{Object.values(peersToShow)
						.filter((peer) => !!peer.stream)
						.map((peer) => (
							<div key={peer.peerId}>
								<VideoPlayer stream={peer.stream} />
								<Typography variant='body1' color='white'>
									{peer.userName}
								</Typography>
							</div>
						))}
				</Box> */}
				{/* <Box sx={{ gridArea: 'others' }}>
					{videos.map((peer) => (
						<div key={peer.id}>
							<VideoPlayer stream={{ id: peer.obj, active: true }} />
							<Typography variant='body1' color='white'>
								{peer.peerid}
							</Typography>
						</div>
					))}
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
				<ShareScreenButton onClick={shareScreen} />
				{/* <ChatButton onClick={toggleChat} /> */}
			</Box>
		</Box>
	);
};
