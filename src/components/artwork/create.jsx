import React, { useState } from 'react';
import { nftLink } from '../../common/link';
import { motion, AnimatePresence } from 'framer-motion';
import Artwork from './components/artwork';
import { useEffect } from 'react';

function CreateArtwork({ isAuth, meId, userNFT, ownedNFT }) {
	const [activeLink, setActiveLink] = useState({ create: 'active', owned: '' });
	const [NFTs, setNFTs] = useState([]);
	const activeHandle = (key) => {
		switch (key) {
			case 1:
				setActiveLink({ create: 'active', owned: '' });
				setNFTs(userNFT);
				break;
			case 2:
				setActiveLink({ create: '', owned: 'active' });
				setNFTs(ownedNFT);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		setNFTs(userNFT);
	}, [userNFT]);

	return (
		<div className='container-fluid create-title'>
			<div
				class='card-title create-title'
				style={{ padding: '0 7px 15px 7px', marginBottom: '15px' }}
			>
				<div class='w-100 d-flex justify-content-between align-items-center'>
					<div className='d-flex'>
						<h3
							onClick={() => activeHandle(1)}
							class={`${activeLink.create} mb-0`}
						>
							Created
						</h3>
						<div style={{ width: '30px' }}></div>
						<h3
							onClick={() => activeHandle(2)}
							class={`${activeLink.owned} mb-0`}
						>
							Owned
						</h3>
					</div>
					{isAuth && (
						<a
							className='btn-solid'
							href={`${nftLink}/create`}
							target='_blank'
							style={{ padding: '3px 12px' }}
						>
							Mint
						</a>
					)}
				</div>
			</div>
			<motion.div className='row' layout>
				<AnimatePresence>
					{NFTs.map((item) => (
						<Artwork
							id={item._id}
							userId={item.creator._id}
							profile={item.creator.avatar}
							fullname={item.creator.fullname}
							artwork={item.imageUrl}
							title={item.title}
							minPrice={item.minPrice}
							totalCopies={item.totalCopies}
							usedCopies={item.usedCopies}
							method={item.method}
							bid_expire_date={item.bid_expire_date}
							likes={item.likes.length}
							isLike={item.likes.includes(meId)}
							allNFT={NFTs}
						/>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default CreateArtwork;
