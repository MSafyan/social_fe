function Media({ post }) {
	return (
		<div
			className='img-wrapper'
			style={{
				marginBottom: !post.description && '0',
				display: !post.imageUrl && !post.videoUrl && 'none',
			}}
		>
			{/* <img
				crossorigin='anonymous'
				src='http://dootbe.herokuapp.com/upload/avatar/default_profile.jpg'
			></img> */}
			{/* <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'></img> */}
			{post?.imageUrl ? (
				<img
					crossorigin='anonymous'
					src={post.imageUrl}
					className='img-fluid lazyload'
					alt='..'
				/>
			) : post?.videoUrl ? (
				<video
					src={post.videoUrl}
					controls
					// preload="none"
				/>
			) : null}
		</div>
	);
}

export default Media;
