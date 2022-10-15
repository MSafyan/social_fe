import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { ChatBubble } from './ChatBubble';
import { ChatInput } from './ChatInput';

export const Chat = () => {
	const { chat } = useContext(ChatContext);

	return (
		<div className='flex flex-col h-full justify-between' data-testid='chat'>
			<div>
				{chat.messages.map((message) => (
					<ChatBubble
						message={message}
						key={message.timestamp + (message?.author || 'anonymous')}
					/>
				))}
			</div>
			<ChatInput />
		</div>
	);
};
