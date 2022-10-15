import './login.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Box } from '@mui/material';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/PropagateLoader';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputEmail, InputPassword } from '../../common/authpage/authInput';
import Loading from '../../components/loading/loading';
import Api from '../../api/api';
import bgLogin from '../../assets/images/auth/bg-login.png';
import bg4 from '../../assets/images/auth/bg4.png';
import bg5 from '../../assets/images/auth/bg5.png';
import { scrollTop } from '../../helper/scrolltop';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

function Login() {
	const history = useHistory();
	const [formData, setLoginForm] = useState({ email: '', password: '' });
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const eyeHandle = () => {
		setVisible(!visible);
	};

	const submitHandle = async (e) => {
		e.preventDefault();
		setLoading(true);
		const res = await Api.userLogin(formData);
		if (res.status === 200) {
			Cookies.set('auth', res.data.token, {
				expires: 360,
				path: '/',
				secure: false,
			});
			setLoginForm({ email: '', password: '' });
			localStorage.setItem('user', JSON.stringify(res.data.user));
			setLoading(false);
			history.push('/');
		} else {
			setLoading(false);
			setLoginForm({ email: '', password: '' });
		}
	};

	const setInputHandle = (e) => {
		setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: { md: 'row', xs: 'column' },
					backgroundImage: { md: `url(${bgLogin})`, xs: 'none' },
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'left',
					margin: { xs: '50px auto 90px' },
					'&::after': {
						content: "''",
						backgroundImage: { md: `url(${bg5})`, xs: `url(${bg4})` },
						bottom: { md: '0', xs: 'auto' },
						left: { md: 'auto', xs: '0' },
						top: { md: 'auto', xs: '90px' },
						right: { md: '0', xs: 'none' },
						position: 'absolute',
						width: { md: '240px', xs: '84px' },
						height: { md: '970px', xs: '355px' },
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
							justifyContent: 'right',
							alignItems: 'center',
							margin: { md: '65px auto 20px', xs: '10px auto' },
							width: '100%',
							display: 'flex',
							flexDirection: { md: 'row', xs: 'column' },
						}}
					>
						<div className='form_'>
							<div className='form-title_'>Log in</div>
							<div className='btn-gp_'></div>
							<form onSubmit={submitHandle}>
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
									className='button btn-form_'
									style={{ padding: '0' }}
									type='submit'
								>
									{loading ? <span></span> : 'Login'}
									<ClipLoader
										color={'#ffff'}
										loading={loading}
										css={override}
										size={10}
									/>
								</button>
							</form>
							<div className='already'>
								<span>Not a member?</span>
								<Link to='/register'>Sign Up</Link>
							</div>
						</div>
					</Box>
				</div>
			</Box>
		</>
	);
}

export default Login;
