import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';

function MessageIcon() {
    return (
        <>
            <li className="header-btn custom-dropdown dropdown-lg btn-group message-btn">
                <Link className="main-link" to="#">
                    <FeatherIcon icon="message-circle" size={16} className="stroke-width-3 icon-light" />
                </Link>
            </li>
        </>
    )
}

export default MessageIcon