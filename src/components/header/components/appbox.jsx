import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import NFTmarket from '../../../assets/images/sidebar/nft_market_place.png';
import activeBid from '../../../assets/images/sidebar/active_bid.png';
import saved from '../../../assets/images/sidebar/saved.png';
import message from '../../../assets/images/sidebar/message.png';
import collection from '../../../assets/images/sidebar/collection.png';
import wallet from '../../../assets/images/sidebar/wallet.png';
import logout from '../../../assets/images/sidebar/logout.png';
import Cookies from 'js-cookie';
import Api from '../../../api/api';
import { getProfileMe } from '../../../data/atom';
import { useRecoilValue } from 'recoil';
import { nftLink } from '../../../common/link';

function AppBox() {
	const profileMe = useRecoilValue(getProfileMe);
	return (
		<>
			<li className='header-btn custom-dropdown d-md-none d-block app-btn'>
				<Link to='#' className='main-link'>
					<FeatherIcon
						icon='grid'
						size={16}
						className='stroke-width-3 icon-light'
					/>
				</Link>
				<div className='overlay-bg app-overlay'></div>
				<div className='app-box'>
					<div className='row'>
						<Icon to={`${nftLink}`} icon={NFTmarket} title='NFT Marketplace' />
						<Icon
							to={`${nftLink}/active-bids`}
							icon={activeBid}
							title='Active Bid'
						/>
						<Icon to={`/saved/${profileMe._id}`} icon={saved} title='Saved' />
						<Icon to={`${nftLink}`} icon={message} title='Messages' />
						<Icon
							to={`${nftLink}/collections/${profileMe._id}`}
							icon={collection}
							title='My Collection'
						/>
						<Icon to={`${nftLink}/wallet`} icon={wallet} title='Wallet' />
						<Icon to='/login' icon={logout} title='Logout' />
					</div>
				</div>
			</li>
		</>
	);
}

const Icon = ({ to, icon, title }) => {
	const history = useHistory();

	const logoutHandle = async () => {
		await Api.userLogout();
		localStorage.removeItem('user');
		Cookies.remove('auth');
		history.push(to);
	};

	return (
		<div className='col-4'>
			<div className='app-icon'>
				{to.includes('/saved') ? (
					<Link to={to}>
						<div className='icon'>
							<img src={icon} alt='' crossorigin='anonymous' />
						</div>
						<h5>{title}</h5>
					</Link>
				) : to !== '/login' && !to.includes('/saved') ? (
					<a href={to} target='_blank'>
						<div className='icon'>
							<img src={icon} alt='' crossorigin='anonymous' />
						</div>
						<h5>{title}</h5>
					</a>
				) : (
					<a onClick={logoutHandle}>
						<div className='icon'>
							<img src={icon} alt='' crossorigin='anonymous' />
						</div>
						<h5>{title}</h5>
					</a>
				)}
			</div>
		</div>
	);
};

export default AppBox;
