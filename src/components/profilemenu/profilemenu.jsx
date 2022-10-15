import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { getProfileMe } from '../../data/atom';

function ProfileMenu({ userId }) {
    const profileMe = useRecoilValue(getProfileMe);
    const activeHandle = (path) => {
        if (window.location.pathname === path) return 'active';
    }
    return (
        <div className="profile-menu section-t-space">
            <ul>
                <li className={activeHandle(`/profile/${userId}`)}>
                    <Link to={`/profile/${userId}`}><h6>Feed</h6></Link>
                </li>
                <li className={activeHandle(`/live-videos/${userId}`)}>
                    <Link to={`/live-videos/${userId}`}><h6>Live Streaming</h6></Link>
                </li>
                <li className={activeHandle(`/follows/${userId}`)}>
                    <Link to={`/follows/${userId}`}><h6>Community</h6>                                </Link>
                </li>
                <li className={activeHandle(`/activity/${userId}`)}>
                    <Link to={`/activity/${userId}`}><h6>Activity</h6></Link>
                </li>
                <li>
                    <Link to={`/profile/${userId}`}><h6>Buy $KEN</h6></Link>
                </li>
                {profileMe._id === userId && <li className={activeHandle(`/explore/${userId}`)}>
                    <Link to={`/explore/${userId}`}><h6>Explore</h6></Link>
                </li>}
                <li className={activeHandle(`/create/${userId}`)}>
                    <Link to={`/create/${userId}`}> <h6>Create</h6></Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileMenu