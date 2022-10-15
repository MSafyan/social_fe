import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	InputEmail,
	InputName,
	InputPassword,
} from '../../common/authpage/authInput';
import Loading from '../../components/loading/loading';
import ClipLoader from 'react-spinners/PropagateLoader';
import { css } from '@emotion/react';
import bgSignup from '../../assets/images/auth/bg-signup.png';
import bg6 from '../../assets/images/auth/bg6.png';
import bg7 from '../../assets/images/auth/bg7.png';
import Api from '../../api/api';
import { scrollTop } from '../../helper/scrolltop';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

function SignUp() {
	const history = useHistory();
	const [formData, setSignupForm] = useState({
		fullname: '',
		email: '',
		password: '',
	});
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const eyeHandle = () => {
		setVisible(!visible);
	};

	const submitHandle = async (e) => {
		e.preventDefault();
		setLoading(true);

		const res = await Api.userRegister(formData);
		if (res.status === 201) {
			setSignupForm({ fullname: '', email: '', password: '' });
			setLoading(false);
			history.push('/login');
		} else {
			setLoading(false);
			setSignupForm({ fullname: '', email: '', password: '' });
		}
	};

	const setInputHandle = (e) => {
		setSignupForm((obj) => ({ ...obj, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		scrollTop();
		const body = document.querySelector('body');
		body.style.overflowY = 'auto';
	}, []);

	return (
		<>
			<Loading />
			<Box
				sx={{
					background: 'transparent',
					width: { md: '100%', xs: '92%' },
					height: { md: '950px', xs: '600px' },
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: { md: 'row', xs: 'column' },
					backgroundImage: { md: `url(${bgSignup})`, xs: 'none' },
					backgroundRepeat: 'no-repeat',
					backgroundSize: '700px 950px',
					backgroundPosition: 'right',
					margin: { md: '0px  auto 0', xs: '50px auto 50px' },
					'&::after': {
						content: "''",
						backgroundImage: { md: `url(${bg7})`, xs: `url(${bg6})` },
						bottom: { md: '0', xs: 'auto' },
						left: '0',
						top: { md: 0, xs: '90px' },
						right: { md: '0', xs: 'none' },
						position: 'absolute',
						width: { md: '383px', xs: '84px' },
						height: { md: '755px', xs: '355px' },
						zIndex: '-1',
					},
					'&::before': {
						content: "''",
						background: 'rgba(100, 151, 255, 0.3)',
						filter: 'blur(200px)',
						right: 0,
						bottom: 0,
						position: 'absolute',
						display: { md: 'block', xs: 'none' },
						width: '770px',
						height: '617px',
						zIndex: '-1',
					},
				}}
			>
				<div className='container_ login_'>
					<Box
						sx={{
							background: 'transparent',
							margin: { md: '0 auto', xs: '0' },
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className='form_'>
							<div className='form-title_'>Create Account</div>
							<div className='btn-gp_'></div>
							<form onSubmit={submitHandle}>
								{InputName({ setInputHandle, formData })}
								{InputEmail({ setInputHandle, formData })}
								{InputPassword({
									setInputHandle,
									formData,
									visible,
									eyeHandle,
									Visibility,
									VisibilityOff,
								})}

								<button
									className='button btn-signup btn-form_'
									style={{ padding: '0' }}
									type={'submit'}
								>
									{loading ? <span></span> : 'Create Account'}
									<ClipLoader
										color={'#ffff'}
										loading={loading}
										css={override}
										size={10}
									/>
								</button>
							</form>
							<div className='already signup'>
								<span>Already have an account?</span>
								<Link to='/login'>Log in</Link>
							</div>
						</div>
					</Box>
				</div>
			</Box>
		</>
	);
}

export default SignUp;
