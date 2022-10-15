export const InputName = ({ setInputHandle, formData }) => {
	return (
		<input
			value={formData.fullname}
			onChange={setInputHandle}
			type='text'
			name='fullname'
			placeholder='Full name'
			required
		/>
	);
};

export const InputEmail = ({ setInputHandle, formData }) => {
	return (
		<input
			onChange={setInputHandle}
			type='email'
			value={formData.email}
			name='email'
			placeholder='Email address'
			required
		/>
	);
};

export const InputPassword = ({
	setInputHandle,
	formData,
	visible,
	eyeHandle,
	Visibility,
	VisibilityOff,
}) => {
	return (
		<>
			<input
				type={visible ? 'text' : 'password'}
				name='password'
				placeholder='Password'
				value={formData.password}
				required
				onChange={setInputHandle}
			/>
			<div onClick={eyeHandle} className='icon'>
				{visible ? (
					<Visibility sx={{ color: '#fff' }} />
				) : (
					<VisibilityOff sx={{ color: '#bdadad' }} />
				)}
			</div>
		</>
	);
};
