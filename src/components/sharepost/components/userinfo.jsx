import { Link } from 'react-router-dom';

function UserInfo({ to, avatar, fullname }) {
	return (
		<div className='user-info'>
			<div className='media'>
				<Link to={to} className='user-img'>
					<img
						src={avatar}
						className='img-fluid lazyload bg-img'
						alt='user'
						crossorigin='anonymous'
					/>
				</Link>
				<div className='media-body'>
					<Link to={to}>
						<h5>{fullname}</h5>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UserInfo;
