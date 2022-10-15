import { Box, Button, Container, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { ws } from './ws';

export const Join = ({ history }) => {
	const { userName, setUserName, setMyhistory } = useContext(UserContext);

	const createRoom = () => {
		setMyhistory(history);
		ws.emit('create-room');
		ws.on('room-created', enterRoom);
	};
	const enterRoom = ({ roomId }) => {
		history.push(`/room/${roomId}`);
	};

	return (
		<Container>
			<Box sx={{}}>
				<TextField
					variant='outlined'
					label='Enter your name'
					sx={{
						'& .MuiOutlinedInput-root': {
							border: '1px solid white',
							color: 'white',
						},
					}}
					onChange={(e) => setUserName(e.target.value)}
					value={userName}
				/>
				<Button onClick={createRoom} variant='contained'>
					Start new meeting
				</Button>
			</Box>
		</Container>
	);
};
