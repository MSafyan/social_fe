import React from 'react';
import LiveStatus from './livestatus';
import VideoContent from './videocontent';
import VideoThumb from './videothumb';
import { TestContext } from '../../../pages/test/TestContext';
import { useHistory } from 'react-router-dom';

function Video({ path, stream }) {
	const { watchStream, setScreenSharingId } = React.useContext(TestContext);
	const history = useHistory();
	return (
		<div className='col-lg-4 col-md-6'>
			<div
				className='trending-gameplay-item mb-50'
				onClick={() => {
					setScreenSharingId(stream.peerId);
					watchStream(stream.peerId);
					history.push(`/room/${stream.peerId}`);
				}}
			>
				<VideoThumb path={path} />
				<div className='d-block d-sm-flex align-items-start'>
					<VideoContent stream={stream} />
					<LiveStatus />
				</div>
			</div>
		</div>
	);
}

export default Video;
