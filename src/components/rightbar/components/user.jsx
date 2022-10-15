import { Link, useHistory } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

function User({ id = '', fullname = '', avatar, filterUsersHandle }) {
	const history = useHistory();
	const username = fullname.split(' ')[0];

	return (
		<li className='friend-box user3' key={id}>
			<Tooltip title={fullname} position='left' trigger='mouseenter'>
				<div className='media'>
					<Link to={`/profile/${id}`} className='user-img'>
						<img
							src={avatar}
							className='img-fluid lazyload bg-img'
							alt='user'
						/>
					</Link>
					<div className='media-body d-flex align-items-center justify-content-between'>
						<h5
							className='user-name'
							onClick={() => history.push(`/profile/${id}`)}
						>
							{username}
						</h5>
						<button className='btn-solid' onClick={() => filterUsersHandle(id)}>
							Follow
						</button>
					</div>
				</div>
			</Tooltip>
		</li>
	);
}

export default User;
