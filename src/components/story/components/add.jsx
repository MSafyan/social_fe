import plus from '../../../assets/images/icon/plus.png';

function Add({ storyBg }) {
	return (
		<div>
			<div
				className='story-box add-box story-box-modal'
				data-bs-toggle='modal'
				data-bs-target='#addStory'
			>
				<div
					className='bg-size blur-up lazyloaded'
					style={{
						backgroundImage: `url(${storyBg})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						display: 'block',
					}}
				>
					<img
						src={storyBg}
						className='img-fluid lazyload bg-img'
						crossorigin='anonymous'
						alt=''
						style={{ display: 'none' }}
					/>
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
			</div>
		</div>
	);
}

export default Add;
