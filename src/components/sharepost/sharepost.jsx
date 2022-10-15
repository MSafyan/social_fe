import { useEffect, useState } from 'react';
import Api from '../../api/api';
import Header from './components/header';
import PostInfo from './components/postinfo';
import UserInfo from './components/userinfo';
import { Notifications } from '../../helper/notifications';
import audio from '../../assets/share.mpeg';

// #7f3ee1
function SharePostModal({ path, postId, post, setShareModel, setShareCount }) {
	const [image, setImage] = useState({ show: false, path: '' });
	const [video, setVideo] = useState({ show: false, path: '' });
	const [newFile, setNewFile] = useState('');

	const createImageFile = async (path) => {
		let response = await fetch(path);
		let data = await response.blob();
		let metadata = { type: 'image/jpeg' };
		let file = new File([data], 'newImage.jpg', metadata);
		setNewFile(file);
	};

	const createVideoFile = async (path) => {
		let response = await fetch(path);
		let data = await response.blob();
		let metadata = { type: 'video/mp4' };
		let file = new File([data], 'newVideo.mp4', metadata);
		setNewFile(file);
	};

	const sharePost = async () => {
		const formData = new FormData();
		formData.append('postId', postId);
		if (image.show) {
			formData.append('image', newFile);
		} else if (video.show) {
			formData.append('video', newFile);
		}
		setShareCount((prev) => prev + 1);
		const res = await Api.sharePost(formData);
		if (res.status === 201) {
			new Audio(audio).play();
			setShareModel(false);
			Notifications('success', 'Story shared successfully');
			await Api.sendSingleNotification({
				toId: post.owner._id,
				notification: `shared your post`,
			});
		}
	};

	useEffect(() => {
		if (post?.imageUrl) {
			setImage({ show: true, path: post.imageUrl });
			setVideo({ show: false, path: '' });
			createImageFile(post.imageUrl);
		} else if (post?.videoUrl) {
			setVideo({ show: true, path: post.videoUrl });
			setImage({ show: false, path: '' });
			createVideoFile(post.videoUrl);
		}
	}, [post]);

	return (
		<div
			className={`modal mobile-full-width`}
			style={{ display: 'block', overflowY: 'auto', background: '#00000040' }}
			id='shareModal'
			aria-labelledby='shareModal'
			tabIndex='-1'
			role='dialog'
			aria-hidden='true'
		>
			<div
				className='modal-dialog modal-dialog-centered'
				role='document'
				style={{ marginTop: '50px' }}
			>
				<div className='modal-content share-modal'>
					<Header setShareModel={setShareModel} />
					<div className='modal-body'>
						<UserInfo
							to={path}
							fullname={post.owner.fullname}
							avatar={post.owner.avatar}
						/>
						<PostInfo
							description={post.description ? post.description : null}
							image={image}
							video={video}
						/>
					</div>
					<div className='modal-footer'>
						<button type='button' onClick={sharePost} className='btn btn-solid'>
							share post
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SharePostModal;
