import { Link } from 'react-router-dom';
import Image from './components/image';
import Stats from './components/stats';
import { getProfileMe } from '../../data/atom';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import Api from '../../api/api';

function ProfileBox({ classname, path, userId, isAuth, profileUser }) {
	const profileMe = useRecoilValue(getProfileMe);
	const [follows, setFollows] = useState({ followers: 0, followings: 0 });
	const [userData, setUserData] = useState({
		avatar: '',
		fullname: '',
		email: '',
	});
	const [isFollow, setIsFollow] = useState(false);

	const followHandle = async () => {
		setIsFollow((prev) => !prev);
		setFollows((prev) => ({
			...prev,
			followers: isFollow ? prev.followers - 1 : prev.followers + 1,
		}));
		await Api.userFollow(userId);
		if (!isFollow) {
			await Api.sendSingleNotification({
				toId: userId,
				notification: `followed you`,
			});
		}
	};

	useEffect(() => {
		let isSubscribe = true;
		if (isSubscribe) {
			if (profileMe.followings.includes(userId)) {
				setIsFollow(true);
			} else {
				setIsFollow(false);
			}
		}
		return () => (isSubscribe = false);
	}, [profileUser]);

	useEffect(() => {
		let isSubscribe = true;
		if (isSubscribe) {
			if (profileUser && profileUser.followers && profileUser.followings) {
				setUserData({
					avatar: profileUser.avatar,
					fullname: profileUser.fullname,
					email: profileUser.email,
				});
				setFollows({
					followers: profileUser.followers.length,
					followings: profileUser.followings.length,
				});
			}
		}
		return () => (isSubscribe = false);
	}, [profileUser]);

	return (
		<div className={`profile-box ${classname}`}>
			<div className='profile-content'>
				<div className='image-section'>
					<Image url={userData.avatar} />
				</div>
				<div className='profile-detail'>
					<Link to='#'>
						<h2>{userData.fullname}</h2>
					</Link>
					<h5>{userData.email}</h5>
					<Stats
						followerCount={follows.followers}
						followingCount={follows.followings}
					/>
					{isAuth ? (
						<Link to={path} className='btn btn-solid'>
							Edit Profile
						</Link>
					) : (
						<button onClick={followHandle} className='btn btn-solid'>
							{isFollow ? 'Unfollow' : 'Follow'}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProfileBox;
