function Stats({ followerCount, followingCount }) {
    return (
        <div className="counter-stats">
            <ul id="counter">
                <li>
                    <h3 className="counter-value">{followingCount}</h3>
                    <h5>following</h5>
                </li>
                <li>
                    <h3 className="counter-value">{followerCount}</h3>
                    <h5>followers</h5>
                </li>
            </ul>
        </div>
    )
}

export default Stats