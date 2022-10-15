import { Link } from 'react-router-dom';
import Image from './components/image';
import Stats from './components/stats';

function ProfileBox1({ classname, profile }) {
	return (
		<div className={`profile-box ${classname}`}>
			<div className='profile-content'>
				<div className='image-section'>
					<Image url={profile.avatar} />
				</div>
				<div className='profile-detail'>
					<Link to='#'>
						<h2>{profile.fullname}</h2>
					</Link>
					<h5>{profile.email}</h5>
					<Stats
						followerCount={profile.followers.length}
						followingCount={profile.followings.length}
					/>
					<Link to={`/profile/${profile._id}`} className='btn btn-solid'>
						View Profile
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProfileBox1;
