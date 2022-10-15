import React from 'react'
import FeatherIcon from 'feather-icons-react';

function ReactionStats({ likes, comments, shareCount }) {
    return (
        <div className="like-panel">
            <div className="left-emoji">
                <h6>{likes} liked</h6>
            </div>
            <div className="right-stats">
                <ul>
                    <li>
                        <h5>
                            <FeatherIcon icon="message-square" size={16} />
                            <span>{comments}</span> comment
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <FeatherIcon icon="share" size={16} />
                            <span>{shareCount}</span> share
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReactionStats