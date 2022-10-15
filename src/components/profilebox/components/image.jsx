function Image({ url }) {
    return (
        <div className="profile-img">
            <img
                src={url} className="img-fluid  lazyload profile-pic bg-img"
                alt="profile" />
        </div>
    )
}

export default Image