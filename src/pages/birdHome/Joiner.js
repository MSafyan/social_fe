import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShareScreenButton } from './components/ShareScreeenButton';
import { VideoPlayer } from './components/VideoPlayer';
import { RoomContext } from './context/RoomContext';
import { Chat } from './components/chat/Chat';
import { NameInput } from './common/Name';
import { ws } from './ws';
import { UserContext } from './context/UserContext';
import { ChatContext } from './context/ChatContext';
import { Box, Typography } from '@mui/material';

export const Joiner = () => {
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
				{screenSharingVideo && (
					<Box sx={{ gridArea: 'user' }}>
						<VideoPlayer stream={screenSharingVideo} />
					</Box>
				)}
			</Box>
		</Box>
	);
};
