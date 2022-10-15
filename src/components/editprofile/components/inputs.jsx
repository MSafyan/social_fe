export const Select = ({ value, updateProfileInputHandle }) => {
	return (
		<div className=' load-input'>
			<label>Gender</label>
			<select
				required
				value={value}
				onChange={updateProfileInputHandle}
				name='gender'
				className='form-input_ select1'
			>
				<option value='' selected={value === '' ? true : false}>
					Select
				</option>
				<option value='male' selected={value === 'male' ? true : false}>
					Male
				</option>
				<option value='female' selected={value === 'female' ? true : false}>
					Female
				</option>
			</select>
		</div>
	);
};

export const InputText = ({ value, updateProfileInputHandle }) => {
	return (
		<div className=' load-input'>
			<label>Full Name</label>
			<input
				required
				value={value}
				onChange={updateProfileInputHandle}
				type='text'
				name='fullname'
				placeholder='Full Name'
			/>
		</div>
	);
};

export const InputEmail = ({ value, updateProfileInputHandle }) => {
	return (
		<div className=' load-input'>
			<label>Email</label>
			<input
				required
				value={value}
				onChange={updateProfileInputHandle}
				type='email'
				name='email'
				placeholder='Email'
			/>
		</div>
	);
};

export const InputPassword = ({
	value,
	name,
	title,
	updatePasswordInputHandle,
}) => {
	return (
		<div className=' load-input'>
			<label>{title}</label>
			<input
				required
				value={value}
				onChange={updatePasswordInputHandle}
				name={name}
				type='password'
				placeholder={title}
			/>
		</div>
	);
};
