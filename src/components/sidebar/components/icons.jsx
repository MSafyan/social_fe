import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../../api/api';

function Icons({ to, icon, title, block }) {
	const history = useHistory();
	const logoutHandle = async () => {
		await Api.userLogout();
		localStorage.removeItem('user');
		Cookies.remove('auth');
		history.push(to);
	};

	return (
		<>
			{to.includes('/saved') ? (
				<li
					onClick={() => {
						if (!block) {
							history.push(to);
						}
					}}
					style={{ cursor: block ? 'not-allowed' : 'pointer' }}
				>
					<Link to={to}>
						<img src={icon} alt='' crossorigin='anonymous' />
					</Link>{' '}
					{title}
				</li>
			) : to !== '/login' && !to.includes('/saved') ? (
				<li
					onClick={() => {
						if (!block) {
							window.open(to, '_blank');
						}
					}}
					style={{ cursor: block ? 'not-allowed' : 'pointer' }}
				>
					<a>
						<img src={icon} alt='' crossorigin='anonymous' />
					</a>{' '}
					{title}
				</li>
			) : (
				<li
					onClick={logoutHandle}
					style={{ cursor: block ? 'not-allowed' : 'pointer' }}
				>
					<a onClick={logoutHandle}>
						<img src={icon} alt='' crossorigin='anonymous' />
					</a>
					{title}
				</li>
			)}
		</>
	);
}

export default Icons;
