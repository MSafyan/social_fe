import { useState } from 'react';
import Api from '../../api/api';
import { InputDescription, InputFile } from '../../common/post/create';
import CardTitle from './components/cardtitle';
import Image from './components/image';
import Video from './components/video';

function CreatePost({ setPosts, setLoader }) {
	const acceptImages = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
	const acceptVideos = ['video/webm', 'video/webp', 'video/mp4', 'video/mkv'];
	const [createPost, setCreatePost] = useState({
		description: '',
		file: '',
		image: '',
		video: '',
	});
	const [imageVideo, setImageVideo] = useState({ image: false, video: false });
	const [disablePostBtn, setDisablePostBtn] = useState(false);

	const setInputHandle = (e) => {
		if (e.target.name === 'file') {
			if (acceptImages.includes(e.target.files[0]?.type)) {
				const reader = new FileReader();
				reader.readAsDataURL(e.target.files[0]);
				reader.onload = () => {
					if (reader.readyState === 2) {
						setCreatePost((obj) => ({
							...obj,
							[e.target.name]: reader.result,
							image: e.target.files[0],
							video: '',
						}));
					}
				};
				setImageVideo({ image: true, video: false });
			} else if (acceptVideos.includes(e.target.files[0]?.type)) {
				setCreatePost((obj) => ({
					...obj,
					[e.target.name]: window.URL.createObjectURL(e.target.files[0]),
					video: e.target.files[0],
					image: '',
				}));
				setImageVideo({ image: false, video: true });
			}
			return;
		}
		setCreatePost((obj) => ({ ...obj, [e.target.name]: e.target.value }));
	};

	const createPostHandle = async (e) => {
		debugger;
		e.preventDefault();

		if (createPost.description || createPost.image || createPost.video) {
			setDisablePostBtn(true);

			const formData = new FormData();
			if (createPost.description.trim().length > 0) {
				formData.append('description', createPost.description);
			}
			if (createPost.video) {
				formData.append('video', createPost.video);
			}
			if (createPost.image) {
				formData.append('image', createPost.image);
			}

			const res = await Api.createPost(formData);
			if (res.status === 201) {
				setLoader(true);
				setPosts([]);
				setImageVideo({ image: false, video: false });
				setDisablePostBtn(false);
				setCreatePost({ description: '', file: '', image: '', video: '' });

				await Api.sendFollowersNotification({
					notification: `added a post.`,
				});
			} else {
				setImageVideo({ image: false, video: false });
				setDisablePostBtn(false);
				setCreatePost({ description: '', file: '', image: '', video: '' });
			}
		}
	};

	return (
		<form onSubmit={createPostHandle} className='create-post'>
			<div className='static-section'>
				<CardTitle />
				{InputDescription({ createPost, setInputHandle })}
			</div>
			{imageVideo.image && Image({ createPost })}
			{imageVideo.video && Video({ createPost })}
			<ul className='create-btm-option'>
				{InputFile({ setInputHandle, acceptImages, acceptVideos })}
			</ul>
			<div id='post-btn' className='post-btn d-block'>
				<button type='submit' className='enable' disabled={disablePostBtn}>
					post
				</button>
			</div>
		</form>
	);
}

export default CreatePost;
