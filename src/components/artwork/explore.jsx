import Artwork from './components/artwork';

function ExploreArtwork({ title, allNFT, meId }) {
	return (
		<div className='container-fluid'>
			<div className='card-title'>
				<h3>{title}</h3>
			</div>
			<div className='row'>
				{allNFT.map((item) => (
					<Artwork
						id={item._id}
						userId={item.creator._id}
						profile={item.creator.avatar}
						fullname={item.creator.fullname}
						artwork={item.imageUrl}
						title={item.title}
						minPrice={item.minPrice}
						totalCopies={item.totalCopies}
						method={item.method}
						bid_expire_date={item.bid_expire_date}
						usedCopies={item.usedCopies}
						likes={item.likes.length}
						isLike={item.likes.includes(meId)}
						allNFT={allNFT}
					/>
				))}
			</div>
		</div>
	);
}

export default ExploreArtwork;
