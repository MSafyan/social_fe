import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Api from '../../../../api/api';

function PostSettings({ setLoader, setUserPosts, postId }) {

    const deletePost = async () => {
        const res = await Api.deletePost(postId);
        if (res.status === 200) {
            setLoader(true)
            setUserPosts([])
        }
    }

    return (
        <div className="setting-btn ms-auto setting-dropdown no-bg">
            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                <MoreHorizontal />
                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                    <ul>
                        {/* <li>
                            <Link to="#"><FeatherIcon icon="bookmark" size={16} className="icon-font-light" />Save post</Link>
                        </li> */}
                        <li>
                            <Link
                                onClick={deletePost}
                                to="#"><FeatherIcon icon="x-octagon" size={16} className="icon-font-light" />Delete Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function MoreHorizontal() {
    return (
        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <FeatherIcon icon="more-horizontal" size={14} className="icon icon-font-color" />
        </div>
    )
}

export default PostSettings