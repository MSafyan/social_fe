import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago'
import FeatherIcon from 'feather-icons-react';
import Api from '../../../api/api';

function Notifications({ notifications }) {
    const [isSeen, setIsSeen] = useState({ seen: false, count: 0 })

    const markSeenNotifications = async () => {
        if (isSeen.seen) {
            await Api.markSeenNotifications()
            setIsSeen({ seen: false, count: 0 })
        }
    }

    useEffect(() => {
        let isSubscribe = true
        if (isSubscribe) {
            if (notifications && notifications.data) {
                if (notifications.unSeen > 0) {
                    setIsSeen({ seen: true, count: notifications.unSeen })
                }
            }
        }
        return () => isSubscribe = false;
    }, [notifications])

    return (
        <>
            <li className="header-btn custom-dropdown dropdown-lg btn-group notification-btn">
                <a onClick={markSeenNotifications} className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <FeatherIcon icon="bell" size={16} className="stroke-width-3 icon-light" />
                    {isSeen.seen && <span className="count warning">{isSeen.count}</span>}
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header">
                        <span>Notification</span>
                        <div className="mobile-close">
                            <h5>close</h5>
                        </div>
                    </div>
                    <div className="dropdown-content">
                        <ul className="friend-list">
                            {notifications && notifications.data ?
                                notifications.data.length > 0 && notifications.data.map((item) => (
                                    <NotiContent item={item} />
                                )) :
                                'No Notifications'
                            }
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}


const NotiContent = ({ item }) => {
    return (
        <li key={item.id._id}>
            <Link to="#">
                <div className="media">
                    <img src={item.id.senderAvatar} alt="user" />
                    <div className="media-body">
                        <div>
                            <h5 className="mt-0">{item.id.notification}</h5>
                            <h6><ReactTimeAgo date={item.id.createdAt} locale="en-US"/></h6>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Notifications