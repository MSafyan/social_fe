import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { dootLink } from '../../../common/link';
import { getJwt } from '../../../api/apiCore';

function MessageIcon() {
	return (
		<>
			<li className='header-btn custom-dropdown dropdown-lg btn-group message-btn'>
				<Link className='main-link'>
					<a onClick={() => window.open(`${dootLink}/${getJwt()}`, '_blank')}>
						<FeatherIcon
							icon='message-circle'
							size={16}
							className='stroke-width-3 icon-light'
						/>
					</a>
				</Link>
			</li>
		</>
	);
}

export default MessageIcon;
