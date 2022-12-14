import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Dialog,
	DialogTitle,
	Input,
	InputLabel,
	Paper,
	TextField,
} from '@mui/material';
// Style imports

function UserPopup(props) {
	const [popupToggle, setPopupToggle] = useState(true);
	const [userDetails, setUserDetails] = useState({
		name: '',
	});

	const handleChange = (event) => {
		const { value } = event.target;
		setUserDetails({ ...userDetails, name: value });
	};

	const handleSubmit = (event) => {
		if (event.type === 'keyup' && event.key !== 'Enter') {
			return;
		}
		if (userDetails.name.length > 0) {
			props.submitHandle(userDetails);
			setPopupToggle(false);
		}
	};

	return (
		<React.Fragment>
			<Dialog
				disableBackdropClick={true}
				className='user-popup'
				onClose={() => setPopupToggle(false)}
				open={popupToggle}
			>
				<Paper className='user-popup-paper' onKeyUp={handleSubmit}>
					<DialogTitle className='user-popup-title'>
						Enter Your Details
					</DialogTitle>
					{/* <Input className="user-popup-input" title="Name" onChange={handleChange} placeholder="Name"></Input> */}
					<div className='user-details-wrapper'>
						<TextField
							required
							title='Name'
							id='outlined-required'
							className='user-popup-input'
							label='Name'
							variant='outlined'
							onChange={handleChange}
							placeholder='Name'
						/>
						<Button className='user-popup-button' onClick={handleSubmit}>
							START
						</Button>
					</div>
				</Paper>
			</Dialog>
		</React.Fragment>
	);
}

UserPopup.propTypes = {
	submitHandle: PropTypes.func,
};

export default memo(UserPopup);
