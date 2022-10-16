import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { nftLink } from '../../common/link';

function NewArtwork({ allNFT }) {
	return (
		<div className='explore-slider'>
			<div className='container-fluid'>
				<div className='card-title'>
					<h3>New Artworks</h3>
				</div>
				<div id='item-carousel-big' className='swipper-carousel nft_alt_slider'>
					<Swiper
						modules={[Navigation]}
						slidesPerView={'auto'}
						spaceBetween={15}
						navigation={true}
					>
						{allNFT.map((item) => (
							<SwiperSlide>
								<div
									className='nft_pic'
									key={item._id}
									style={{ height: '300px' }}
								>
									<a href={`${nftLink}`} target='_blank'>
										<span className='nft_pic_info'>
											<span className='nft_pic_title text-dark'>
												{item.title}
											</span>
											<span className='nft_pic_by text-dark'>
												{item.creator.fullname}
											</span>
										</span>
									</a>
									<div className='nft_pic_wrap h-100 w-100'>
										<img
											crossorigin='anonymous'
											src={item.imageUrl}
											className='lazy img-fluid h-100 w-100'
											style={{ objectFit: 'cover' }}
											alt=''
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default NewArtwork;
