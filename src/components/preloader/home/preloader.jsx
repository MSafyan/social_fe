import FeatherIcon from 'feather-icons-react';
import Logo from '../../header/components/logo';
import HomeIcon from '../../header/components/homeicon';
import MessageIcon from '../../header/components/messageicon';
import AppBox from '../../header/components/appbox';
import Notifications from '../../header/components/notifications';
import Profile from '../../header/components/profile';
import SidePanel from './components/sidepanel';
import StoryBox from './components/storybox';
import CreatePost from './components/createpost';
import Post from './components/post';
import RightPanel from './components/rightpanel';
import { Link } from 'react-router-dom';

function Preloader() {

    return (
        <div className="pre-loader">
            <header>
                <div className="mobile-fix-menu"></div>
                <div className="container-fluid custom-padding">
                    <div className="header-section">
                        <div className="header-left">
                            <Logo />
                            <div className="search-box">
                                <FeatherIcon icon="search" size={16} className="icon icon-light" />
                                <input type="text" className="form-control" placeholder="find friends..." />
                            </div>
                            <HomeIcon />
                        </div>
                        <div className="header-right">
                            <ul className="option-list">
                                <MessageIcon />
                                <li className="header-btn custom-dropdown">
                                    <Link className="main-link" to="#">
                                        <FeatherIcon icon="sun" size={16} className="stroke-width-3 icon-light" />
                                    </Link>
                                </li>
                                <AppBox />
                                <Notifications />
                                <Profile blurUp={true} />
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-body container-fluid custom-padding">
                <SidePanel />
                <div className="page-center">
                    <StoryBox />
                    <div className="container-fluid section-t-space px-0 layout-default">
                        <div className="page-content">
                            <div className="content-center">
                                <CreatePost />
                                <div className="overlay-bg"></div>
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        </div>
    )
}

export default Preloader