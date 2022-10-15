import { useEffect } from 'react';
import Logo from './components/logo';
import Search from './components/search';
import HomeIcon from './components/homeicon';
import MessageIcon from './components/messageicon';
import DarkLightTheme from './components/darktheme';
import AppBox from './components/appbox';
import Notifications from './components/notifications';
import Profile from './components/profile';
import { headerLogic } from '../../helper/headerlogic';
import { useRecoilValue } from 'recoil';
import { getProfileMe } from '../../data/atom';

function Header({ notifications, allUsers }) {
	const profileMe = useRecoilValue(getProfileMe);

	useEffect(() => {
		let isClean = true;
		if (isClean) headerLogic();
		return () => (isClean = false);
	}, []);

	return (
		<header>
			<div className='mobile-fix-menu'></div>
			<div className='container-fluid custom-padding'>
				<div className='header-section'>
					<div className='header-left'>
						<Logo />
						<Search allUsers={allUsers} />
						<HomeIcon />
					</div>
					<div className='header-right'>
						<ul className='option-list'>
							<MessageIcon />
							<DarkLightTheme />
							<AppBox />
							<Notifications notifications={notifications} />
							<Profile
								id={profileMe._id}
								avatar={profileMe.avatar}
								fullname={profileMe.fullname}
							/>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
