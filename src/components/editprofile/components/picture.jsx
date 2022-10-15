import { useState } from 'react';
import pencil from '../../../assets/images/icon/pencil.png'

function Picture({ updateProfileInputHandle,avatar }) {
    const [avatarPreview, setAvatarPreview] = useState(avatar);

    const setAvatarHandle = (e) => {
        updateProfileInputHandle(e);

        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className='profile-pic-wrapper'>
            <div className='profile-pic-wrapper2'>
                <img src={avatarPreview} alt="avatar" />
                <div className="custom-file">
                    <div>
                        <input onChange={setAvatarHandle} name="avatar" type="file" className="custom-file-input_" id="images" accept="image/png,image/jpg,image/jpeg,image/gif" />
                        <label htmlFor="images" className="custom-file-label_"> <img src={pencil}
                            alt="avatar" /></label>
                    </div>
                </div>
            </div>
            <div>
                <p className='pictext1'>Upload New Image</p>
                <p className='pictext2'>Maximum size allowed is 2 MB of PNG, JPEG, JPG</p>
            </div>
        </div>
    )
}

export default Picture