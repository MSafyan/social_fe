import * as React from 'react';
import Post from './post/post';
import Api from '../../api/api';

function Posts({ setLoader, posts, isAuth, setUserPosts }) {
	const [options, setOptions] = React.useState([]);

	React.useEffect(() => {
		const apiCall = async () => {
			const res = await Api.getLanguages();
			setOptions(res.data);
		};
		apiCall();
	}, []);

	return (
		<>
			<div className='post-panel '>
				{posts &&
					posts.map((post) => (
						<Post
							post={post}
							isShare={post.share.isShare}
							avatar={
								!post.share.isShare ? post.owner.avatar : post.share.user.avatar
							}
							fullname={
								!post.share.isShare
									? post.owner.fullname
									: post.share.user.fullname
							}
							postId={post._id}
							isAuth={isAuth}
							setLoader={setLoader}
							setUserPosts={setUserPosts}
							options={options}
						/>
					))}
			</div>
		</>
	);
}

export default Posts;
