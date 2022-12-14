import Icons from './components/icons';
import NFTmarket from '../../assets/images/sidebar/nft_market_place.png';
import activeBid from '../../assets/images/sidebar/active_bid.png';
import saved from '../../assets/images/sidebar/saved.png';
import message from '../../assets/images/sidebar/message.png';
import collection from '../../assets/images/sidebar/collection.png';
import wallet from '../../assets/images/sidebar/wallet.png';
import logout from '../../assets/images/sidebar/logout.png';
import { getProfileMe } from '../../data/atom';
import { useRecoilValue } from 'recoil';
import { dootLink, nftLink } from '../../common/link';
import { getJwt } from '../../api/apiCore';

function Sidebar() {
	const profileMe = useRecoilValue(getProfileMe);

	return (
		<div className='sidebar-panel'>
			<ul className='sidebar-icon'>
				<Icons
					to={`${nftLink}/${getJwt()}`}
					icon={NFTmarket}
					title='NFT Marketplace'
					block
				/>
				<Icons
					to={`${nftLink}/active-bids/${getJwt()}`}
					icon={activeBid}
					title='Active Bid'
					block
				/>
				<Icons to={`saved/${profileMe._id}`} icon={saved} title='Saved' block />
				<Icons to={`${dootLink}/${getJwt()}`} icon={message} title='Messages' />
				<Icons
					to={`${nftLink}/collections/${profileMe._id}/${getJwt()}`}
					icon={collection}
					title='My Collection'
					block
				/>
				<Icons
					to={`${nftLink}/wallet/${getJwt()}`}
					icon={wallet}
					block
					title='Wallet'
				/>
				<Icons to='/login' icon={logout} title='Logout' />
			</ul>
		</div>
	);
}

export default Sidebar;
