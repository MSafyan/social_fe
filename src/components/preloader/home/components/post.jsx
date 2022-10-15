function Post() {
    return (
        <div className="post-panel section-t-space">
            <div className="post-wrapper col-grid-box">
                <div className="post-title">
                    <div className="profile">
                        <div className="media">
                            <div className="user-img"></div>
                            <div className="media-body">
                                <h5></h5>
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-details ratio2_1">
                    <div className="img-wrapper bg-size">
                    </div>
                    <div className="detail-box">
                        <h3></h3>
                        <h5 className="tag"></h5>
                        <div className="ldr-p"><p></p><p></p></div>
                        <div className="bookmark favourite-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post