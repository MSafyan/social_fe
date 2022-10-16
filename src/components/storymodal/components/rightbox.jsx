import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import FeatherIcon from 'feather-icons-react';
import { motion } from 'framer-motion';
import $ from 'jquery';

function RightBox({ active, userStories, setShowStoryModel }) {
	return (
		<div className='right-box col-xl-9 col-lg-8 p-0'>
			<div className='sliderContainer'>
				<a
					href='#'
					onClick={() => {
						$('body').removeClass('filter-blur');
						$('body').css('overflow-y', 'auto');
						$('.story-model').css('overflow-y', 'auto');
						setShowStoryModel(false);
					}}
				>
					<FeatherIcon
						style={{ zIndex: 4 }}
						icon='x'
						className='icon-light close'
					/>
				</a>
				{active && (
					<Swiper
						modules={[Navigation, Autoplay]}
						slidesPerView={1}
						navigation={true}
					>
						{userStories.map((story) => (
							<SwiperSlide key={story._id}>
								{({ isActive }) => <Image isActive={isActive} story={story} />}
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	);
}

const Image = ({ isActive, story }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{
					opacity: isActive ? 1 : 0,
					scale: isActive ? 1 : 0.5,
				}}
				exit={{ opacity: 0, scale: 0.5 }}
				className='story-image'
			>
				<img
					src={story.imageUrl}
					crossOrigin='anonymous'
					className='img-fluid lazyload'
					alt=''
				/>
			</motion.div>
		</>
	);
};
export default RightBox;
