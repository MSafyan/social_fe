import { useEffect, useState } from 'react';
import Api from '../../api/api';
import User from './components/user';

function RightBar({ activeLanders }) {
	const [users, setUsers] = useState([]);

	const filterUsersHandle = async (id) => {
		let filteredUser = users.filter((user) => user._id !== id);
		setUsers(filteredUser);
		await Api.userFollow(id);
		await Api.sendSingleNotification({
			toId: id,
			notification: `followed you`,
		});
	};

	useEffect(() => {
		let isSubscribe = true;
		if (isSubscribe) {
			setUsers(activeLanders);
		}
	}, [activeLanders]);

	return (
		<div className='conversation-panel xl-light'>
			<div className='panel-header'>
				<h2>Active Landers</h2>
			</div>
			<div className='friend-section'>
				<div className='friend-list'>
					<ul>
						{users ? (
							users.length > 0 ? (
								users.map((item) => (
									<User
										id={item?._id}
										fullname={item?.fullname}
										avatar={item?.avatar}
										filterUsersHandle={filterUsersHandle}
									/>
								))
							) : (
								<span style={{ color: 'grey' }}>No Data Found</span>
							)
						) : (
							<span style={{ color: 'grey' }}>No Data Found</span>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RightBar;
