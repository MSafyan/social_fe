function Video({ createPost }) {
    return (
        <>
            {
                createPost.file &&
                <div style={{ marginTop: '10px' }}>
                    <video
                        src={createPost.file}
                        controls
                        style={{ width: '100%', borderRadius: '5px' }} />
                </div>
            }
        </>
    )
}

export default Video