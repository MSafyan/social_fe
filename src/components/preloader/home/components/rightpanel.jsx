function RightPanel() {
    return (
        <div className="conversation-panel xl-light">
            <div className="panel-header">
                <h2></h2>
                <h5></h5>
            </div>
            <div className="friend-section">
                <div className="friend-list collapse show">
                    <ul>
                        {Array(6).fill().map((a, i) => (
                            <li key={i} className="friend-box">
                                <div className="media">
                                    <a className="user-img"></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightPanel