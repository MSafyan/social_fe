import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
// import { UserProvider } from './pages/birdHome/context/UserContext';
// import { RoomProvider } from './pages/birdHome/context/RoomContext';
// import { ChatProvider } from './pages/birdHome/context/ChatContext';
import { TestProvider } from './pages/test/TestContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RecoilRoot>
		{/* <UserProvider>
			<RoomProvider>
				<ChatProvider> */}
		<App />
		{/* </ChatProvider>
			</RoomProvider>
		</UserProvider> */}
	</RecoilRoot>
);
