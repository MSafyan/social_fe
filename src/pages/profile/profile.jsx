import { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Api from '../../api/api'
import CreatePost from '../../components/createpost/createpost'
import Header from '../../components/header/header'
import Loader from '../../components/loader/loader'
import Posts from '../../components/posts/posts'
import ProfileCover from '../../components/profilecover/profilecover'
import ProfileMenu from '../../components/profilemenu/profilemenu'
import Sidebar from '../../components/sidebar/sidebar'
import { getProfileMe, getUserProfile } from '../../data/atom'
import { scrollTop } from '../../helper/scrolltop'

function Profile() {
    let { id } = useParams();
    const [isAuth, setIsAuth] = useState(false)
    const [isLoader, setLoader] = useState(true)
    const [notifications, setNotifications] = useState({})
    const [allUsers, setAllUsers] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const [profileMe, setProfileMe] = useRecoilState(getProfileMe);
    const [profileUser, setProfileUser] = useRecoilState(getUserProfile);

    const getProfile = useCallback(async (isSubscribe) => {
        const res = await Api.getProfile();
        if (isSubscribe) {
            if (res.status === 200) {
                setProfileMe(res.data.data)
                localStorage.setItem('user', JSON.stringify(res.data.data));
            }
        }
    }, [])

    const getProfileUser = useCallback(async (isSubscribe) => {
        const res = await Api.getUserProfile(id);
        if (isSubscribe) {
            if (res.status === 200) {
                setProfileUser(res.data.data);
            }
        }
    }, [])

    const getUserPosts = useCallback(async (isSubscribe) => {
        const res = await Api.userPosts(id);
        if (isSubscribe) {
            if (res.status === 200) {
                setUserPosts(res.data.data);
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
            } else {
                setLoader(false)
            }
        }
    }, [])

    const getAllUsers = useCallback(async (isSubscribe) => {
        const res = await Api.getAllUsers();
        if (isSubscribe) {
            if (res.status === 200) {
                setAllUsers(res.data.data);
            }
        }
    }, [])

    const getNotifications = useCallback(async (isSubscribe) => {
        const res = await Api.getUserNotifications();
        if (isSubscribe) {
            if (res.status === 200) {
                setNotifications(res.data.data);
            }
        }
    }, [])

    useEffect(() => {
        let isSubscribe = true;
        getProfile(isSubscribe);
        return () => isSubscribe = false
    }, [])

    useEffect(() => {
        let isSubscribe = true;
        getProfileUser(isSubscribe);
        return () => isSubscribe = false
    }, [])

    useEffect(() => {
        let isSubscribe = true;
        getNotifications(isSubscribe);
        return () => isSubscribe = false
    }, []);

    useEffect(() => {
        let isSubscribe = true;
        getAllUsers(isSubscribe);
        return () => isSubscribe = false
    }, []);

    useEffect(() => {
        let isSubscribe = true;
        getUserPosts(isSubscribe);
        return () => isSubscribe = false
    }, [isLoader]);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflowY = 'auto';
        scrollTop();
        setIsAuth(profileMe._id === id ? true : false)
    }, [isLoader])

    return (
        <>
            {isLoader && <Loader />}
            <Header
                allUsers={allUsers}
                notifications={notifications}
            />
            <div className="page-body container-fluid custom-padding profile-page">
                <Sidebar />
                <div className="page-center">
                    <ProfileCover
                        profileUser={profileUser}
                        isAuth={isAuth}
                        userId={id}
                    />
                    <ProfileMenu userId={id} />
                    <div className="user-profile-posts section-t-space px-0 layout-default">
                        <div className="page-content">
                            <div className="content-center">
                                {isAuth && <CreatePost
                                    setLoader={setLoader}
                                    setPosts={setUserPosts}
                                />}
                                <div className="overlay-bg"></div>
                                {userPosts && <Posts
                                    posts={userPosts}
                                    isAuth={isAuth}
                                    setUserPosts={setUserPosts}
                                    setLoader={setLoader}
                                />}
                                <div className="post-loader no-more">
                                    <div className="no-more-text">
                                        <p>no more post</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile