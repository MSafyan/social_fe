import plus from '../../../assets/images/icon/plus.png';

function Add({ avatar }) {
	return (
		<div className='add-story'>
			<div className='media list-media'>
				<div
					className='story-img'
					data-bs-toggle='modal'
					data-bs-target='#addStory'
				>
					<div className='user-img'>
						<img
							crossorigin='anonymous'
							src={avatar}
							className='img-fluid lazyload blur-up bg-img'
							style={{ borderRadius: '5px' }}
							alt='user'
						/>
					</div>
					<div className='add-icon'>
						<div className='icon'>
							<img
								src={plus}
								className='img-fluid lazyloaded'
								alt='plus'
								crossorigin='anonymous'
							/>
						</div>
					</div>
				</div>
				<div className='media-body'>
					<h5>add story</h5>
					<h6>share your photos</h6>
				</div>
			</div>
		</div>
	);
}

export default Add;
