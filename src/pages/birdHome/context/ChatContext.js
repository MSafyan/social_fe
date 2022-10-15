import { createContext, useEffect, useReducer } from 'react';
import { chatReducer, ChatState } from '../reducers/chatReducer';
import {
	addHistoryAction,
	addMessageAction,
	toggleChatAction,
} from '../reducers/chatActions';
import { ws } from '../ws';
// interface ChatValue {
//     chat: ChatState;
//     sendMessage: (message: string, roomId: string, author: string) => void;
//     toggleChat: () => void;
// }
export const ChatContext = createContext({
	chat: {
		messages: [],
		isChatOpen: false,
	},
	sendMessage: (message, roomId, author) => {},
	toggleChat: () => {},
});

export const ChatProvider = ({ children }) => {
	const [chat, chatDispatch] = useReducer(chatReducer, {
		messages: [],
		isChatOpen: false,
	});

	const sendMessage = (message, roomId, author) => {
		const messageData = {
			content: message,
			timestamp: new Date().getTime(),
			author,
		};
		chatDispatch(addMessageAction(messageData));

		ws.emit('send-message', roomId, messageData);
	};

	const addMessage = (message) => {
		chatDispatch(addMessageAction(message));
	};

	const addHistory = (messages) => {
		chatDispatch(addHistoryAction(messages));
	};

	const toggleChat = () => {
		chatDispatch(toggleChatAction(!chat.isChatOpen));
	};
	useEffect(() => {
		ws.on('add-message', addMessage);
		ws.on('get-messages', addHistory);
		return () => {
			ws.off('add-message', addMessage);
			ws.off('get-messages', addHistory);
		};
	}, []);
	return (
		<ChatContext.Provider
			value={{
				chat,
				sendMessage,
				toggleChat,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
