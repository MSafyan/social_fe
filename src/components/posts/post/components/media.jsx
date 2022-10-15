function Media({ post }) {
    return (
        <div className="img-wrapper" style={{
            marginBottom: !post.description && '0',
            display: !post.imageUrl && !post.videoUrl && 'none',
        }}>
            {post?.imageUrl ?
                <img src={post.imageUrl}
                    className="img-fluid lazyload"
                    alt=".." /> :
                post?.videoUrl ?
                    <video
                        src={post.videoUrl}
                        controls
                    // preload="none"
                    />
                    : null
            }
        </div>
    )
}

export default Media