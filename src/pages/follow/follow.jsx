import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Api from '../../api/api'
import Follows from '../../components/follows/follows'
import Header from '../../components/header/header'
import Loader from '../../components/loader/loader'
import ProfileCover from '../../components/profilecover/profilecover'
import ProfileMenu from '../../components/profilemenu/profilemenu'
import Sidebar from '../../components/sidebar/sidebar'
import { getProfileMe, getUserProfile } from '../../data/atom'
import { scrollTop } from '../../helper/scrolltop'

function Follow() {
    let { id } = useParams();
    const [isAuth, setIsAuth] = useState(false)
    const [isLoader, setLoader] = useState(true)
    const [notifications, setNotifications] = useState({})
    const [allUsers, setAllUsers] = useState([])
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

    const getAllUsers = useCallback(async (isSubscribe) => {
        const res = await Api.getAllUsers();
        if (isSubscribe) {
            if (res.status === 200) {
                setAllUsers(res.data.data);
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
            } else {
                setLoader(false)
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
        const body = document.querySelector('body');
        body.style.overflowY = 'auto';
        scrollTop();
        setIsAuth(profileMe._id === id ? true : false)
    }, [])

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
                    <div className="section-t-space px-0 layout-default">
                        <div className="content-center">
                            <Follows profileUser={profileUser} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Follow