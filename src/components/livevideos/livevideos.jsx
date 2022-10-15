import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import Header from './components/header';
import Video from './components/video';
import thumb01 from '../../assets/images/thumbs/thumb01.jpg';
import Api from '../../api/api';

function Videos({ userId, isAuth }) {
	const [streams, setStreams] = useState([]);

	const apiCall = async () => {
		const res = await Api.getStream();
		console.log(res.data);
		setStreams(res.data.data);
	};

	useEffect(() => {
		$('.popup-video').magnificPopup({
			type: 'iframe',
		});
		apiCall();
	}, []);

	return (
		<>
			<section className='trending-gamepay-area'>
				<div>
					<Header userId={userId} isAuth={isAuth} />
					<div className='row'>
						{streams.map((_, i) => {
							return (
								<div key={i}>
									<Video path={thumb01} stream={_} />;
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<div className='post-loader no-more'>
				<div className='no-more-text'>
					<p>no more videos</p>
				</div>
			</div>
		</>
	);
}

export default Videos;
