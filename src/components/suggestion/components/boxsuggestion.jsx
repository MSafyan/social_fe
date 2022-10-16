import Slider from 'react-slick';
import { slide2 } from '../../../common/slider/slider';

function BoxSuggestion({ url }) {
	const style = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		display: 'block',
	};
	const historyHandle = (i) => {
		console.log(i);
	};

	return (
		<>
			<Slider {...slide2} className='slide-2 no-arrow default-space'>
				{Array(4)
					.fill()
					.map((item, i) => (
						<div key={i} onClick={() => historyHandle(i)}>
							<div className='story-box'>
								<div
									className={`adaptive-overlay ${
										i % 2 === 0 ? 'pink-overlay' : 'skin-overlay'
									}`}
								></div>
								<div className='story-bg bg-size' style={style}>
									<img
										src={url}
										className='img-fluid bg-img'
										crossorigin='anonymous'
										data-adaptive-background='1'
										alt=''
										style={{ display: 'none' }}
									/>
								</div>
								<div className='story-content'>
									<h6>josephin water</h6>
								</div>
							</div>
						</div>
					))}
			</Slider>
		</>
	);
}

export default BoxSuggestion;
