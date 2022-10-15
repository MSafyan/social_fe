import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import { Link, useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../pages/birdHome/context/UserContext';
import { ws } from '../../../pages/birdHome/ws';

function Header({ isAuth, userId }) {
	const [loading, setLoading] = useState(false);
	const [quality, setQuality] = useState(12);
	const { userName, setUserName } = useContext(UserContext);

	const createRoom = () => {
		ws.emit('create-room');
		ws.on('room-created', enterRoom);
	};
	const enterRoom = ({ roomId }) => {
		history.push(`/room/${roomId}`);
	};

	const history = useHistory();
	const handleJoin = async () => {
		createRoom();
		// debugger;
		// try {
		// 	if (!loading) {
		// 		setLoading(true);
		// 		history?.push(`/join`);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
		// setLoading(false);
	};

	return (
		<div className='row align-items-center mb-30'>
			<div className='col'>
				<div className='hf-section-title'>
					<h4 className='title'>Trending</h4>
				</div>
			</div>
			<div className='col'>
				{isAuth && (
					<div className='section-btn'>
						<Link
							to='#'
							style={{ padding: '3px 4px', width: '85px' }}
							className='btn-solid d-flex align-items-center justify-content-end'
						>
							<FeatherIcon
								style={{ marginRight: '5px' }}
								icon={'radio'}
								size={18}
							/>
							<span onClick={handleJoin}>Go Live</span>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
