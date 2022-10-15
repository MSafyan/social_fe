import FeatherIcon from 'feather-icons-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Api from '../../../../api/api';
import { getProfileMe } from '../../../../data/atom';

function ReactionPanel({ ownerId, postId, setLikesCount, commentsShow, setCommentsShow, likes, setShareModel }) {
    const profileMe = useRecoilValue(getProfileMe);
    const [liked, setLiked] = useState(false);

    const likesHandle = async () => {
        if (liked) {
            setLiked(false)
            setLikesCount(prev => prev - 1)
        } else {
            setLiked(true)
            setLikesCount(prev => prev + 1)
            await Api.sendSingleNotification({
                toId: ownerId,
                notification: `liked your post`
            })
        }
        await Api.postLike(postId)
    }

    useEffect(() => {
        let isSubscribe = true;
        if (isSubscribe) {
            likes.map(like => {
                if (like === profileMe._id) {
                    setLiked(true);
                    return;
                }
            })
        }
        return () => isSubscribe = false
    }, [])

    return (
        <div className="post-react">
            <ul>
                <li className="react-btn">
                    {!liked ?
                        <Like likesHandle={likesHandle} /> :
                        <Liked likesHandle={likesHandle} />
                    }
                </li>
                <li className="comment-click">
                    <Link to="#" onClick={() => setCommentsShow(!commentsShow)}
                        className="react-click" >
                        <FeatherIcon icon="message-square" size={18} />Comment</Link>
                </li>
                <li onClick={() => setShareModel(true)}>
                    <Link to="#" className="react-click" /*data-bs-target="#shareModal" data-bs-toggle="modal"*/ >
                        <FeatherIcon icon="share" size={16} />Share</Link>
                </li>
            </ul>
        </div>
    )
}

function Liked({ likesHandle }) {
    return (
        <Link to="#" className="react-click"
            style={{ color: "#ff6559" }}
            onClick={likesHandle} >
            <FeatherIcon icon="thumbs-up" size={18}
                style={{
                    fill: "rgb(255 101 89)",
                    stroke: "rgb(255 101 89 / 50%)"
                }} />Liked</Link>
    )
}

function Like({ likesHandle }) {
    return (
        <Link to="#" className="react-click"
            onClick={likesHandle} >
            <FeatherIcon icon="thumbs-up" size={18} />Like</Link>
    )
}

export default ReactionPanel