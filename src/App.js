import 'react-tippy/dist/tippy.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import EditProfile from './pages/profile/editprofile';
import LiveVideos from './pages/livevideos/livevideos';
import Follow from './pages/follow/follow';
import Activity from './pages/activity/activity';
import Explore from './pages/artwork/explore';
import Create from './pages/artwork/create';
import Saved from './pages/artwork/saved';
import ProtectedRoute from './protectedroute';
import ProtectedAuth from './protectedauth';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
//safyan
// import RoomComponent from './components/livevideos/components/RoomComponent';
// import { Join } from './pages/birdHome/join';
import { TestProvider } from './pages/test/TestContext';

import Test from './pages/test/Test';
TimeAgo.addDefaultLocale(en);

// import { useEffect } from 'react';
// import $ from 'jquery';

function App() {
	// useEffect(() => {
	//   if (localStorage.getItem('light')) {
	//     $("#change-link").attr("href", "../assets/css/style.css");
	//   } else {
	//     $("#change-link").attr("href", "../assets/css/dark.css");
	//   }
	//   return () => {
	//     localStorage.removeItem("light")
	//   }
	// }, [])

	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: { main: '#ff6559' },
			secondary: { main: 'rgba(85, 0, 255, 0.88)' },
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<TestProvider>
						<ProtectedRoute exact path='/' component={Home} />
						<ProtectedRoute path='/profile/:id' component={Profile} />
						<ProtectedRoute path='/edit-profile/:id' component={EditProfile} />
						<ProtectedRoute path='/follows/:id' component={Follow} />
						<ProtectedRoute path='/live-videos/:id' component={LiveVideos} />
						<ProtectedRoute path='/activity/:id' component={Activity} />
						<ProtectedRoute path='/explore/:id' component={Explore} />
						<ProtectedRoute path='/create/:id' component={Create} />
						<ProtectedRoute path='/saved/:id' component={Saved} />
						<ProtectedAuth path='/login' component={Login} />
						<ProtectedAuth path='/register' component={SignUp} />
						{/* safyan */}
						{/* <ProtectedRoute path='/join/:id' component={Join} /> */}
						{/* <ProtectedRoute path='/join' component={Join} /> */}
						{/* <ProtectedRoute path='/room/:id' component={Room} /> */}
						<ProtectedRoute path='/room/:id' component={Test} />

						{/* <ProtectedRoute path='/joiner/:id' component={Joiner} /> */}
					</TestProvider>
				</Router>
			</ThemeProvider>

			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				theme={'dark'}
			/>
		</>
	);
}

export default App;
