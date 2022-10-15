import Slider from 'react-slick';
import Add from './components/add';
import StoryItem from './components/storyitem';
import { slider8 } from '../../common/slider/slider';

function Story({
	stories,
	profileMe,
	allStories,
	setUserStories,
	setShowStoryModel,
}) {
	return (
		<>
			<div className='story-section ratio_115'>
				<Slider {...slider8} className='slide-8 no-arrow default-space'>
					<Add storyBg={profileMe?.avatar} />
					{stories.map((user) => (
						<StoryItem
							userId={user._id}
							fullname={user.fullname}
							avatar={user.avatar}
							allStories={allStories}
							setUserStories={setUserStories}
							setShowStoryModel={setShowStoryModel}
						/>
					))}
				</Slider>
			</div>
		</>
	);
}

export default Story;
