import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getProfileMe } from '../../../data/atom';
import SharePostModal from '../../sharepost/sharepost';
import Comments from './components/comments';
import Detail from './components/detail';
import Media from './components/media';
import ReactionPanel from './components/reactionpanel';
import ReactionStats from './components/reactionstats';
import TitleBox from './components/titlebox';

function Post({
	isShare,
	setLoader,
	setUserPosts,
	post,
	isAuth,
	postId,
	fullname,
	avatar,
	options,
}) {
	const [commentsShow, setCommentsShow] = useState(false);
	const [likesCount, setLikesCount] = useState(0);
	const [commentsCount, setCommentsCount] = useState(0);
	const [shareCount, setShareCount] = useState(0);
	const [shareModal, setShareModel] = useState(false);
	const profileMe = useRecoilValue(getProfileMe);

	useEffect(() => {
		let isSubscribe = true;
		if (isSubscribe) {
			setLikesCount(post.likes?.length);
			setCommentsCount(post.comments?.length);
			setShareCount(post.share.shareCount);
		}
		return () => (isSubscribe = false);
	}, [post]);

	return (
		<div className='post-wrapper col-grid-box section-t-space'>
			{isShare && (
				<div className='post-shared-title'>
					<p>
						<Link to={`/profile/${post.owner._id}`}>
							{profileMe._id === post.owner._id ? 'You' : post.owner.fullname}
						</Link>{' '}
						shared this post
					</p>
				</div>
			)}
			<TitleBox
				isAuth={isAuth}
				postId={postId}
				userId={isShare ? post.share.user._id : post.owner._id}
				ownerImage={avatar}
				ownerName={fullname}
				createdAt={post.createdAt}
				setLoader={setLoader}
				setUserPosts={setUserPosts}
			/>
			<div className='post-details'>
				<Media post={post} />
				{post.description && (
					<Detail description={post.description} options={options} />
				)}
				<ReactionStats
					likes={likesCount}
					comments={commentsCount}
					shareCount={shareCount}
				/>
				<ReactionPanel
					ownerId={post.owner._id}
					postId={postId}
					likes={post.likes}
					setLikesCount={setLikesCount}
					commentsShow={commentsShow}
					setCommentsShow={setCommentsShow}
					setShareModel={setShareModel}
				/>
				<Comments
					ownerId={post.owner._id}
					postId={postId}
					commentsShow={commentsShow}
					comments={post.comments}
					setCommentsCount={setCommentsCount}
				/>
			</div>
			{shareModal && (
				<SharePostModal
					postId={postId}
					post={post}
					path={`/profile/${post.owner._id}`}
					setShareCount={setShareCount}
					setShareModel={setShareModel}
				/>
			)}
		</div>
	);
}

export default Post;
