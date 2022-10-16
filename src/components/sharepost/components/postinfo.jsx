function PostInfo({ video, image, description }) {
	return (
		<div className='post-section ratio2_1'>
			<div className='post-img'>
				{image.show ? (
					<img
						src={image.path}
						crossorigin='anonymous'
						className='img-fluid lazyload bg-img'
						style={{ width: '100%' }}
						alt='..'
					/>
				) : video.show ? (
					<video
						src={video.path}
						controls
						style={{ width: '100%' }}
						// preload="none"
					/>
				) : null}
			</div>
			{description && (
				<div className='post-content'>
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}

export default PostInfo;
