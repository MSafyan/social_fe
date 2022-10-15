import { useState } from 'react'
import ProfileBox from '../../components/profilebox/profilebox'
import Image from './components/image'
import { useEffect } from 'react'
import Api from '../../api/api'

function ProfileCover({ userId, isAuth, profileUser }) {
    const [imagePreview, setImagePreview] = useState()

    const editImageHandle = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);

        coverImageHandle(file);
    }

    const coverImageHandle = async (file) => {
        const formData = new FormData();
        formData.append("image", file);
        await Api.updateCover(formData)
    }

    useEffect(() => {
        setImagePreview(profileUser?.coverUrl)
        return () => setImagePreview("")
    }, [profileUser])

    return (
        <>
            <div className="profile-cover">
                <Image path={imagePreview} />
                <ProfileBox
                    classname={"d-lg-block d-none"}
                    path={`/edit-profile/${userId}`}
                    userId={userId}
                    isAuth={isAuth}
                    profileUser={profileUser}
                />
                {isAuth && <div className="btn-group">
                    <label htmlFor='edit-cover' className="btn-white btn-cover">edit cover</label>
                    <input type="file" onChange={editImageHandle} id='edit-cover' name="edit-cover" accept="image/png,image/jpg,image/jpeg,image/gif" />
                </div>}
            </div>
            <div className="d-lg-none d-block">
                <ProfileBox
                    classname={""}
                    path={`/edit-profile/${userId}`}
                    userId={userId}
                    isAuth={isAuth}
                    profileUser={profileUser}
                />
            </div>
        </>
    )
}

export default ProfileCover