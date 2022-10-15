import { useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Cookies from 'js-cookie';
import Api from '../../../api/api';

function Profile({ blurUp, id, fullname, avatar }) {
	return (
		<>
			<li className='header-btn custom-dropdown profile-btn btn-group'>
				<a
					className='main-link'
					href='#'
					data-bs-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<FeatherIcon
						icon='user'
						size={16}
						className='stroke-width-3 icon-light d-sm-none d-block'
					/>
					<div className='media d-none d-sm-flex'>
						<div className='user-img'>
							<img
								src={avatar}
								style={{ borderRadius: '100%' }}
								className={`img-fluid ${blurUp && 'blur-up'} lazyload bg-img`}
								alt='user'
							/>
						</div>
						<div className='media-body d-none d-md-block'>
							<h4>{fullname}</h4>
						</div>
					</div>
				</a>
				<div className='dropdown-menu dropdown-menu-right'>
					<div className='dropdown-header'>
						<span>profile</span>
						<div className='mobile-close'>
							<h5>close</h5>
						</div>
					</div>
					<div className='dropdown-content'>
						<ul className='friend-list'>
							<ProfileLi
								to={`/profile/${id}`}
								icon='user'
								title='Profile'
								subtitle='Profile preview & settings'
							/>
							<ProfileLi
								to='/login'
								icon='log-out'
								title='Log out'
								subtitle=''
							/>
						</ul>
					</div>
				</div>
			</li>
		</>
	);
}

const ProfileLi = ({ to, icon, title, subtitle }) => {
	const history = new useHistory();
	const linkHandle = async () => {
		if (to.includes('/profile')) {
			// history(to);
			window.location.href = to;
		} else if (to === '/login') {
			await Api.userLogout();
			localStorage.removeItem('user');
			Cookies.remove('auth');
			history.push(to);
		}
	};
	return (
		<li>
			<p onClick={linkHandle}>
				<div className='media'>
					<FeatherIcon icon={icon} />
					<div className='media-body'>
						<div>
							<h5 className='mt-0'>{title}</h5>
							{subtitle && <h6>{subtitle}</h6>}
						</div>
					</div>
				</div>
			</p>
		</li>
	);
};

export default Profile;
