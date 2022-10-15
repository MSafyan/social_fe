import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

function HomeIcon() {
    return (
        <ul className="btn-group">
            <li className="header-btn home-btn">
                <Link className="main-link" to="/">
                    <FeatherIcon icon="home" size={16} className="stroke-width-3 icon-light" />
                </Link>
            </li>
        </ul>
    )
}

export default HomeIcon