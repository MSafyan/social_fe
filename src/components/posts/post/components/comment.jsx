import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

function Comment({ index, fullname, avatar, comment, createdAt }) {
	return (
		<div key={index} className='main-comment'>
			<div className='media'>
				<Link to='#' className='user-img'>
					<img src={avatar} className='img-fluid lazyload bg-img' alt='user' />
				</Link>
				<div className='media-body'>
					<Link to='#'>
						<h5>{fullname}</h5>
					</Link>
					<p>{comment}</p>
					{/* <ul className="comment-option">
                        <li><Link to="#">like (5)</Link></li>
                    </ul> */}
				</div>
				<div className='comment-time'>
					<h6>
						<ReactTimeAgo date={createdAt} locale='en-US' />
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Comment;
