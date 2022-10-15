function Media({ post }) {
	return (
		<div
			className='img-wrapper'
			style={{
				marginBottom: !post.description && '0',
				display: !post.imageUrl && !post.videoUrl && 'none',
			}}
		>
			{/* <img src='http://localhost:4000/IMG-20211114-WA0253.jpg'></img> */}
			{/* <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'></img> */}
			{post?.imageUrl ? (
				<img src={post.imageUrl} className='img-fluid lazyload' alt='..' />
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
