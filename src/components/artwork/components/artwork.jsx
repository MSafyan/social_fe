import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { nftLink } from '../../../common/link';
import Api from '../../../api/api';
import Countdown from '../../countdown/countdown';

function Artwork({
	allNFT,
	id,
	userId,
	fullname,
	profile,
	artwork,
	method,
	bid_expire_date,
	title,
	minPrice,
	totalCopies,
	usedCopies,
	likes,
	isLike,
}) {
	const [isSaved, setIsSaved] = useState(false);
	const [NFTlikes, setNFTLikes] = useState(0);

	const NFTsaveHandle = async () => {
		setIsSaved((prev) => !prev);
		if (isSaved) {
			setNFTLikes((prev) => prev - 1);
		} else {
			setNFTLikes((prev) => prev + 1);
		}
		await Api.NFTSave(id);
	};

	useEffect(() => {
		setIsSaved(isLike);
		setNFTLikes(likes);
	}, [allNFT]);

	return (
		<motion.div
			className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
			layout
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0 }}
			exit={{ opacity: 0, scale: 0 }}
			key={id}
		>
			<div className='nft__item'>
				{method === 'auction' && (
					<Countdown bid_expire_date={bid_expire_date} />
				)}
				<Tooltip title={fullname} position='top' trigger='mouseenter'>
					<div className='author_list_pp'>
						<Link to={`/create/${userId}`}>
							<img src={profile} className='lazy' alt='' />
						</Link>
					</div>
				</Tooltip>
				<div className='nft__item_wrap'>
					<a href={`${nftLink}/detail/${id}`} target='_blank'>
						<img src={artwork} className='lazy nft__item_preview' alt='' />
					</a>
				</div>
				<div className='nft__item_info'>
					<a>
						<h4>{title}</h4>
					</a>
					<div className='nft__item_price'>
						{minPrice} ETH
						<span>
							{usedCopies}/{totalCopies}
						</span>
					</div>
					<div className='nft__item_action d-flex justify-content-between align-items-center'>
						<a href={`${nftLink}/detail/${id}`} target='_blank'>
							Place a bid
						</a>
						<div className='nft__item_like'>
							<i
								onClick={NFTsaveHandle}
								className='fa fa-heart'
								style={{ color: isSaved && '#ff6559', fontSize: '12px' }}
							></i>
							<span>{NFTlikes}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Artwork;
