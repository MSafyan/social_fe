import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

function DarkLightTheme() {
    const [isDark, setIsDark] = useState(true)

    const isDarkHandle = (is) => {
        if (is) {
            setIsDark(false)
            $("#change-link").attr("href", "../assets/css/style.css");
        } else {
            setIsDark(true)
            $("#change-link").attr("href", "../assets/css/dark.css");
        }
    }
    return (
        <>
            <li className="header-btn custom-dropdown">
                {
                    !isDark ?
                        <Link onClick={() => isDarkHandle(false)} to="#" id="dark" className="main-link">
                            <FeatherIcon icon="moon" size={16} className="stroke-width-3 icon-light" />
                        </Link> :
                        <Link onClick={() => isDarkHandle(true)} to="#" id="light" className="main-link">
                            <FeatherIcon icon="sun" size={16} className="stroke-width-3 icon-light" />
                        </Link>
                }
            </li>
        </>
    )
}

export default DarkLightTheme