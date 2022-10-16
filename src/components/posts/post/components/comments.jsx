import { useState, useEffect, useRef } from 'react';
import Comment from './comment';
// import InputEmoji from 'react-input-emoji';
import { useRecoilValue } from 'recoil';
import Api from '../../../../api/api';
import { getProfileMe } from '../../../../data/atom';
import EmojiPicker from 'emoji-picker-react';
import { IconButton, TextField, Box, OutlinedInput } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InputAdornment from '@mui/material/InputAdornment';

function Comments({
	ownerId,
	postId,
	comments,
	commentsShow,
	setCommentsCount,
}) {
	const profileMe = useRecoilValue(getProfileMe);
	const [showEmoji, setShowEmoji] = useState(false);
	const [comment, setComment] = useState('');
	const [commentsArray, setComments] = useState([]);

	const submitComment = async () => {
		debugger;
		setShowEmoji(false);
		if (comment && comment.trim() && comment.length > 0) {
			setComments((prev) => [
				...prev,
				{ comment, user: profileMe, createdAt: Date.now() },
			]);
			setCommentsCount((prev) => prev + 1);

			const res = await Api.postComment({ postId, comment });
			if (res.status === 201) {
				setComment('');
			}
			await Api.sendSingleNotification({
				toId: ownerId,
				notification: `commented on your post`,
			});
		}
	};

	useEffect(() => {
		let isSubscribe = true;
		if (isSubscribe) {
			setComments(comments);
		}
		return () => (isSubscribe = false);
	}, [comments]);

	return (
		<div className='comment-section'>
			<div className={`comments ${commentsShow && 'd-block'}`}>
				{commentsArray &&
					commentsArray.map((item, i) => (
						<Comment
							index={i}
							fullname={item.user?.fullname}
							avatar={item.user?.avatar}
							comment={item.comment}
							createdAt={item.createdAt}
						/>
					))}
			</div>
			<div className='reply'>
				<div className='search-input input-style input-lg icon-right'>
					<Box sx={{ width: '100%' }}>
						<OutlinedInput
							onChange={(e) => {
								setComment(e.target.value);
							}}
							onKeyPress={(e) => {
								if (e.key === 'Enter') submitComment();
							}}
							value={comment}
							variant='outlined'
							sx={{
								width: '100%',
							}}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										onClick={() => {
											setShowEmoji((prev) => !prev);
										}}
										edge='end'
									>
										<EmojiEmotionsIcon color={showEmoji ? 'primary' : ''} />
									</IconButton>
								</InputAdornment>
							}
						/>
					</Box>
					{showEmoji && (
						<EmojiPicker
							onEmojiClick={(e, emoji) => {
								setComment((prev) => prev + e.emoji);
							}}
							theme='dark'
							emojiStyle='google'
						/>
					)}
					{/* <InputEmoji
						ref={inputRef}
						value={comment}
						onChange={(e) => {
							setComment(e);
						}}
						onEnter={submitComment}
						placeholder='Write a comment...'
					/> */}
				</div>
			</div>
		</div>
	);
}

export default Comments;
