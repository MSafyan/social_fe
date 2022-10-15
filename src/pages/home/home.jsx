import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Preloader from '../../components/preloader/home/preloader';
import Sidebar from '../../components/sidebar/sidebar';
import CreatePost from '../../components/createpost/createpost';
import Posts from '../../components/posts/posts';
import RightBar from '../../components/rightbar/rightbar';
import Story from '../../components/story/story';
import StoryModal from '../../components/storymodal/storymodal';
import CreateStory from '../../components/createstory/createstory';
import { getProfileMe } from '../../data/atom';
import { useRecoilState } from 'recoil';
import { scrollTop } from '../../helper/scrolltop';
import Api from '../../api/api';

function Home() {
	const [loader, setLoader] = useState(true);
	const [storyLoader, setStoryLoader] = useState(true);
	const [showStoryModel, setShowStoryModel] = useState(false);
	const [stories, setStories] = useState([]);
	const [allStories, setAllStories] = useState([]);
	const [userStories, setUserStories] = useState([]);
	const [allUsers, setAllUsers] = useState([]);
	const [timelinePosts, setTimelinePosts] = useState([]);
	const [activeLanders, setActiveLanders] = useState([]);
	const [notifications, setNotifications] = useState({});
	const [profileMe, setProfileMe] = useRecoilState(getProfileMe);

	const getProfile = useCallback(async (isSubscribe) => {
		const res = await Api.getProfile();
		if (isSubscribe) {
			if (res.status === 200) {
				// setLoader(false);
				setProfileMe(res.data.data);
				localStorage.setItem('user', JSON.stringify(res.data.data));
			}
		}
	}, []);

	const getAllUsers = useCallback(async (isSubscribe) => {
		const res = await Api.getAllUsers();
		if (isSubscribe) {
			if (res.status === 200) {
				setAllUsers(res.data.data);
			}
		}
	}, []);

	const getTimelinePosts = useCallback(async (isSubscribe) => {
		const res = await Api.timelinePosts();
		if (isSubscribe) {
			if (res.status === 200) {
				setTimelinePosts(res.data.data);
				setLoader(false);
			}
		}
	}, []);

	const getActiveLanders = useCallback(async (isSubscribe) => {
		const res = await Api.getActiveLanders();
		if (isSubscribe) {
			if (res.status === 200) {
				setActiveLanders(res.data.data);
			}
		}
	}, []);

	const getNotifications = useCallback(async (isSubscribe) => {
		const res = await Api.getUserNotifications();
		if (isSubscribe) {
			if (res.status === 200) {
				setNotifications(res.data.data);
			}
		}
	}, []);

	const getStories = useCallback(async (isSubscribe) => {
		const res = await Api.getStories();
		if (isSubscribe) {
			if (res.status === 200) {
				setStories(res.data.data);
				setStoryLoader(false);
			}
		}
	}, []);

	const getAllStories = useCallback(async (isSubscribe) => {
		const res = await Api.getAllStories();
		if (isSubscribe) {
			if (res.status === 200) {
				setAllStories(res.data.data);
			}
		}
	}, []);

	useEffect(() => {
		let isSubscribe = true;
		getNotifications(isSubscribe);
		return () => (isSubscribe = false);
	}, []);

	useEffect(() => {
		let isSubscribe = true;
		getActiveLanders(isSubscribe);
		return () => (isSubscribe = false);
	}, []);

	useEffect(() => {
		let isSubscribe = true;
		getTimelinePosts(isSubscribe);
		return () => (isSubscribe = false);
	}, [loader]);

	useEffect(() => {
		let isSubscribe = true;
		getAllStories(isSubscribe);
		getStories(isSubscribe);
		return () => (isSubscribe = false);
	}, [storyLoader]);

	useEffect(() => {
		let isSubscribe = true;
		getAllUsers(isSubscribe);
		return () => (isSubscribe = false);
	}, []);

	useEffect(() => {
		let isSubscribe = true;
		getProfile(isSubscribe);
		return () => (isSubscribe = false);
	}, []);

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.overflowY = 'auto';
		scrollTop();
	}, [loader]);

	return (
		<>
			{(storyLoader || loader) && <Preloader />}
			<Header allUsers={allUsers} notifications={notifications} />
			<div className='page-body container-fluid custom-padding'>
				<Sidebar />
				<div className='page-center'>
					<Story
						profileMe={profileMe}
						stories={stories}
						allStories={allStories}
						setUserStories={setUserStories}
						setStoryLoader={setStoryLoader}
						setShowStoryModel={setShowStoryModel}
					/>
					<div className='container-fluid section-t-space px-0 layout-default'>
						<div className='page-content'>
							<div className='content-center'>
								<CreatePost setLoader={setLoader} setPosts={setTimelinePosts} />
								<div className='overlay-bg'></div>
								{timelinePosts && (
									<Posts
										posts={timelinePosts}
										isAuth={false}
										setUserPosts={setTimelinePosts}
									/>
								)}
								<div className='post-loader no-more'>
									<div className='no-more-text'>
										<p>no more post</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<RightBar activeLanders={activeLanders} />
			</div>
			{showStoryModel && (
				<StoryModal
					profileMe={profileMe}
					stories={stories}
					allStories={allStories}
					userStories={userStories}
					setUserStories={setUserStories}
					setShowStoryModel={setShowStoryModel}
				/>
			)}
			<CreateStory
				setShowStoryModel={setShowStoryModel}
				setStoryLoader={setStoryLoader}
			/>
		</>
	);
}

export default Home;
