import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

function Header({ setShareModel }) {
    return (
        <div className="modal-header">
            <div className="btn-group">
                <h5 >share as post</h5>
            </div>
            <Link onClick={() => setShareModel(false)} to="#" data-bs-dismiss="modal" aria-label="Close">
                <FeatherIcon icon="x" size={16} className="close-btn" />
            </Link>
        </div>
    )
}

export default Header