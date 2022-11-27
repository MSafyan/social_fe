import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getProfileMe } from '../../data/atom';

function ProfileMenu({ userId }) {
	const block = true;
	const profileMe = useRecoilValue(getProfileMe);
	const activeHandle = (path) => {
		if (window.location.pathname === path) return 'active';
	};
	return (
		<div className='profile-menu section-t-space'>
			<ul>
				<li className={activeHandle(`/profile/${userId}`)}>
					<Link to={`/profile/${userId}`}>
						<h6>Feed</h6>
					</Link>
				</li>
				<li className={activeHandle(`/live-videos/${userId}`)}>
					<Link
						to={block ? '#' : `/live-videos/${userId}`}
						style={{ cursor: block ? 'not-allowed' : 'pointer' }}
					>
						<h6>Live Streaming</h6>
					</Link>
				</li>
				<li className={activeHandle(`/follows/${userId}`)}>
					<Link to={`/follows/${userId}`}>
						<h6>Community</h6>{' '}
					</Link>
				</li>
				<li className={activeHandle(`/activity/${userId}`)}>
					<Link
						to={block ? '#' : `/activity/${userId}`}
						style={{ cursor: block ? 'not-allowed' : 'pointer' }}
					>
						<h6>Activity</h6>
					</Link>
				</li>
				<li>
					<Link
						to={block ? '#' : `/profile/${userId}`}
						style={{ cursor: block ? 'not-allowed' : 'pointer' }}
					>
						<h6>Buy $KEN</h6>
					</Link>
				</li>
				{profileMe._id === userId && (
					<li className={activeHandle(`/explore/${userId}`)}>
						<Link
							to={block ? '#' : `/explore/${userId}`}
							style={{ cursor: block ? 'not-allowed' : 'pointer' }}
						>
							<h6>Explore</h6>
						</Link>
					</li>
				)}
				<li className={activeHandle(`/create/${userId}`)}>
					<Link
						to={block ? '#' : `/create/${userId}`}
						style={{ cursor: block ? 'not-allowed' : 'pointer' }}
					>
						<h6>Create</h6>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default ProfileMenu;
