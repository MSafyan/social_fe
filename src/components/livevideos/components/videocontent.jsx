import { Link } from 'react-router-dom';
import moment from 'moment';

function VideoContent({ stream }) {
	var now = moment(new Date()); //todays date
	var end = moment(stream.createdAt); // another date
	var duration = moment.duration(now.diff(end));

	return (
		<div className='gameplay-content'>
			<h5 className='title'>
				<Link to='#'>{stream.owner?.fullname} Streaming</Link>
			</h5>
			<div className='gameplay-meta'>
				<ul>
					<li>since {duration.asMinutes().toString().substring(0, 4)} mint</li>
				</ul>
			</div>
		</div>
	);
}

export default VideoContent;
