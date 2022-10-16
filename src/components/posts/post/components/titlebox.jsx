import { Link } from "react-router-dom"
import ReactTimeAgo from 'react-time-ago'
import PostSettings from "./postsettings"

function TitleBox({ userId, setLoader, setUserPosts, isAuth, postId, ownerImage, ownerName, createdAt }) {
    return (
        <div className="post-title">
            <div className="profile">
                <div className="media">
                    <Link to={`/profile/${userId}`} className="user-img">
                        <img
                        crossorigin='anonymous'
                            src={ownerImage}
                            className="img-fluid lazyload bg-img"
                            alt="user" />
                    </Link>
                    <div className="media-body">
                        <Link to={`/profile/${userId}`}><h5>{ownerName}</h5></Link>
                        <h6><ReactTimeAgo date={createdAt} locale="en-US" /></h6>
                    </div>
                </div>
            </div>
            {isAuth && <PostSettings
                postId={postId}
                setLoader={setLoader}
                setUserPosts={setUserPosts}
            />}
        </div>
    )
}

export default TitleBox