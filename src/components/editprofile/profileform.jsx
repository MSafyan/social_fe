import { useEffect } from 'react';
import { useState } from 'react';
import Api from '../../api/api';
import { Notifications } from '../../helper/notifications';
import ProfileButton from './components/button';
import {
	InputEmail,
	InputPassword,
	InputText,
	Select,
} from './components/inputs';
import Picture from './components/picture';

function EditProfileForm({ setLoader, profileMe }) {
	const [updateProfile, setUpdateProfile] = useState({
		avatar: '',
		fullname: '',
		email: '',
		gender: '',
	});
	const [updatePassword, setPasswordProfile] = useState({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [disableButton, setDisableButton] = useState({
		btn1: false,
		btn2: false,
	});

	const updateProfileInputHandle = (e) => {
		if (e.target.name === 'avatar') {
			setUpdateProfile((prev) => ({
				...prev,
				[e.target.name]: e.target.files[0],
			}));
			return;
		}
		setUpdateProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const updatePasswordInputHandle = (e) => {
		setPasswordProfile((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const updateProfileHandle = async (e) => {
		e.preventDefault();
		setDisableButton((prev) => ({ ...prev, btn1: true }));

		const formData = new FormData();
		formData.append('email', updateProfile.email);
		formData.append('fullname', updateProfile.fullname);
		formData.append('gender', updateProfile.gender);
		formData.append('image', updateProfile.avatar);

		const res = await Api.updateProfile(formData);
		if (res.status === 200) {
			setLoader(true);
			setDisableButton((prev) => ({ ...prev, btn1: false }));
		}
	};

	const updatePasswordHandle = async (e) => {
		e.preventDefault();
		setDisableButton((prev) => ({ ...prev, btn2: true }));

		if (updatePassword.newPassword === updatePassword.confirmPassword) {
			const res = await Api.updatePassword(updatePassword);
			if (res.status === 200) {
				Notifications('success', res.data.message);
				setPasswordProfile({
					oldPassword: '',
					newPassword: '',
					confirmPassword: '',
				});
				setDisableButton((prev) => ({ ...prev, btn2: false }));
			} else {
				setDisableButton((prev) => ({ ...prev, btn2: false }));
			}
		} else {
			setDisableButton((prev) => ({ ...prev, btn2: false }));
			Notifications('warning', 'Confirm Password not matched');
		}
	};

	useEffect(() => {
		setUpdateProfile((prev) => ({
			avatar: profileMe.avatar,
			fullname: profileMe.fullname,
			email: profileMe.email,
			gender: profileMe.gender,
		}));
	}, []);

	return (
		<>
			<div className='profile-parent load-form'>
				<form onSubmit={updateProfileHandle} encType='multipart/form-data'>
					<Picture
						avatar={profileMe.avatar}
						updateProfileInputHandle={updateProfileInputHandle}
					/>
					<div className='mt-3'>
						<div className=' load-input-wrapper'>
							<InputText
								value={updateProfile.fullname}
								updateProfileInputHandle={updateProfileInputHandle}
							/>
							<InputEmail
								value={updateProfile.email}
								updateProfileInputHandle={updateProfileInputHandle}
							/>
							<Select
								value={updateProfile.gender}
								updateProfileInputHandle={updateProfileInputHandle}
							/>
						</div>
						<ProfileButton
							disabled={disableButton.btn1}
							title={'Update Profile'}
						/>
					</div>
				</form>
			</div>
			<div className='profile-parent load-form'>
				<form onSubmit={updatePasswordHandle}>
					<div className='mt-2'>
						<div className=' load-input-wrapper'>
							<InputPassword
								value={updatePassword.oldPassword}
								name={'oldPassword'}
								title={'Old Password'}
								updatePasswordInputHandle={updatePasswordInputHandle}
							/>
							<InputPassword
								value={updatePassword.newPassword}
								name={'newPassword'}
								title={'New Password'}
								updatePasswordInputHandle={updatePasswordInputHandle}
							/>
							<InputPassword
								value={updatePassword.confirmPassword}
								name={'confirmPassword'}
								title={'Confirm Password'}
								updatePasswordInputHandle={updatePasswordInputHandle}
							/>
						</div>
						<ProfileButton
							disabled={disableButton.btn2}
							title={'Update Password'}
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default EditProfileForm;
