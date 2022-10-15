import { Link } from "react-router-dom"
import logo from '../../../assets/images/icon/logo.png'

function Logo() {
    return (
        <div className="brand-logo">
            <Link to="/">
                <img
                    src={logo}
                    style={{ width: '35px' }}
                    lazyloading="true"
                    alt="logo"
                    decoding="async"
                    className="img-fluid lazyload"
                />
            </Link>
        </div>
    )
}

export default Logo