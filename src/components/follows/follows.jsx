import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfileBox1 from '../profilebox/profilebox1'

function Follows({profileUser}) {
    const [active, setActive] = useState({ h3_1: 'active', h3_2: '' })
    const [followData, setFollowData] = useState([])

    const followsShowHandle = (key) => {
        switch (key) {
            case 1:
                setActive({ h3_1: 'active', h3_2: '' })
                if (profileUser && profileUser.followers && profileUser.followings) {
                    setFollowData(profileUser.followers)
                }
                break;
            case 2:
                setActive({ h3_1: '', h3_2: 'active' })
                if (profileUser && profileUser.followers && profileUser.followings) {
                    setFollowData(profileUser.followings)
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        let isSubscribe = true;
        if (isSubscribe) {
            if (profileUser && profileUser.followers && profileUser.followings) {
                setFollowData(profileUser.followers)
            }
        }
        return () => isSubscribe = false;
    }, [profileUser])

    return (
        <div className="friend-list-box section-b-space">
            <div className="card-title">
                <div className="d-flex">
                    <h3 className={active.h3_1}
                        onClick={() => followsShowHandle(1)}
                    >Followers</h3>
                    <div></div>
                    <h3 className={active.h3_2}
                        onClick={() => followsShowHandle(2)}
                    >Following</h3>
                </div>
            </div>
            <div className="container-fluid">
                <div className="friend-list friend-page-list">
                    <motion.ul layout>
                        <AnimatePresence>
                            {followData && followData.map((item) => (
                                <motion.li
                                    layout
                                    animate={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    key={item._id}
                                >
                                    <ProfileBox1
                                        classname="friend-box"
                                        profile={item}
                                    />
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default Follows