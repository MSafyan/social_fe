import $ from 'jquery';

function StoryItem({
	setUserStories,
	allStories,
	userId,
	avatar,
	setShowStoryModel,
	fullname,
}) {
	return (
		<div key={userId}>
			<div
				onClick={() => {
					setUserStories(allStories.filter((st) => st.owner === userId));
					setShowStoryModel(true);
					$('body').addClass('filter-blur');
					$('body').css('overflow-y', 'hidden');
					$('.story-model').css('overflow-y', 'hidden');
				}}
				className='story-box story-box-modal'
			>
				<div className='adaptive-overlay orange-overlay'></div>
				<div
					className='story-bg bg-size'
					style={{
						backgroundImage: `url(${avatar})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						display: 'block',
					}}
				>
					<img
						src={avatar}
						className='img-fluid bg-img'
						data-adaptive-background='1'
						alt=''
						style={{ display: 'none' }}
					/>
				</div>
				<div className='story-content'>
					<h6>{fullname}</h6>
				</div>
				<div className='story-setting'>
					<div className='btn-group'>
						<a href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-sun icon-light iw-13 ih-13'
							>
								<circle cx='12' cy='12' r='5'></circle>
								<line x1='12' y1='1' x2='12' y2='3'></line>
								<line x1='12' y1='21' x2='12' y2='23'></line>
								<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
								<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
								<line x1='1' y1='12' x2='3' y2='12'></line>
								<line x1='21' y1='12' x2='23' y2='12'></line>
								<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
								<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StoryItem;
