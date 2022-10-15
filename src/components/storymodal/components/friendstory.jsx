import ReactTimeAgo from 'react-time-ago';

function FriendStory({
	stories,
	userStories,
	allStories,
	setUserStories,
	setActive,
}) {
	return (
		<div className='friend-story'>
			<h4 className='story-title'>all stories</h4>
			<div className='slider-nav'>
				{stories &&
					stories.map((user) => (
						<div className='media list-media'>
							<div className='story-img'>
								<div
									onClick={() => {
										setActive(false);
										setTimeout(() => {
											setUserStories(
												allStories.filter((st) => st.owner === user._id)
											);
											setActive(true);
										}, 300);
									}}
									className='user-img'
								>
									<img
										src={user.avatar}
										className='img-fluid  lazyload bg-img'
										style={{ borderRadius: '5px', cursor: 'pointer' }}
										alt='user'
									/>
								</div>
							</div>
							<div className='media-body'>
								<h5>{user.fullname}</h5>
								<h6>
									<ReactTimeAgo
										date={
											allStories.filter((st) => st.owner === user._id)[
												allStories.filter((st) => st.owner === user._id)
													.length - 1
											].createdAt
										}
										locale='en-US'
									/>
								</h6>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default FriendStory;
