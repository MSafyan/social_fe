function Image({path}) {
    return (
        <>
            <img
                src={path}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="img-fluid lazyload bg-img"
                alt="cover"
            />
        </>
    )
}

export default Image