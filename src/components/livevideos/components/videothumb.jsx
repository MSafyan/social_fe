import React from 'react';
import playBtn from '../../../assets/images/thumbs/play.png';

function VideoThumb({ path }) {
	return (
		<div className='gameplay-thumb'>
			<a className='popup-video'>
				<img src={playBtn} alt='' className='play' />
				<img src={path} alt='' />
			</a>
			<div className='treand-gameplay-overlay'>
				<ul>
					<li className='quality'>hd</li>
				</ul>
			</div>
		</div>
	);
}

export default VideoThumb;
