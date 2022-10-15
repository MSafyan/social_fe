import axios, { setAuthHeader } from './apiCore';
import { Notifications } from '../helper/notifications';
import { errorHandler } from '../helper/errorhandler';

export default class Api {
	// Login User API
	static userLogin = async (data) => {
		try {
			const res = await axios.post(`/api/v1/user/login`, data);
			setAuthHeader(res.data.token);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Register User API
	static userRegister = async (data) => {
		try {
			const res = await axios.post(`/api/v1/user/register`, data);
			Notifications('success', res.data.message);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// steams create API
	static createStream = async (data) => {
		try {
			const res = await axios.post(`/api/v1/stream/create`, data);
			// console.log(res);
			Notifications('success', res.data.data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};
	// steams get API
	static getStream = async (data) => {
		try {
			const res = await axios.get(`/api/v1/stream/all`, data);
			Notifications('success', 'streams');
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	static deleteStream = async () => {
		try {
			const res = await axios.delete(`/api/v1/stream`);
			Notifications('success', res.data.data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// get language list
	static getLanguages = async (data) => {
		try {
			const res = await axios.get(`https://libretranslate.de/languages`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// translate
	static translateLanguages = async (data) => {
		try {
			const res = await axios.post(`https://libretranslate.de/translate`, {
				...data,
				api_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			});
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Send Notification to  User API
	static sendSingleNotification = async (data) => {
		try {
			const res = await axios.post(`/api/v1/notification/single`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Send Notification to Followers API
	static sendFollowersNotification = async (data) => {
		try {
			const res = await axios.post(`/api/v1/notification/all`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Create Post API
	static createPost = async (data) => {
		try {
			const res = await axios.post(`/api/v1/post/create`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Share Post API
	static sharePost = async (data) => {
		try {
			const res = await axios.post(`/api/v1/post/share`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Post a comment API
	static postComment = async (data) => {
		try {
			const res = await axios.post(`/api/v1/post/comment`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Create Story API
	static createStory = async (data) => {
		try {
			const res = await axios.post(`/api/v1/story/create`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Update Profile API
	static updateProfile = async (data) => {
		try {
			const res = await axios.put(`/api/v1/user/update/profile`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Update Password API
	static updatePassword = async (data) => {
		try {
			const res = await axios.put(`/api/v1/user/update/password`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Update Cover API
	static updateCover = async (data) => {
		try {
			const res = await axios.put(`/api/v1/user/update/cover`, data);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Follow/Unfollow User API
	static userFollow = async (id) => {
		try {
			const res = await axios.put(`/api/v1/user/follow/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// save/Unsaved NFT API
	static NFTSave = async (id) => {
		try {
			const res = await axios.put(`/api/v1/nft/save/${id}`);
			return res;
		} catch (error) {
			return error.response.data;
		}
	};

	// like/unlike Post API
	static postLike = async (id) => {
		try {
			const res = await axios.put(`/api/v1/post/like/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Logout User API
	static userLogout = async () => {
		try {
			const res = await axios.get(`/api/v1/user/logout`);
			return res;
		} catch (error) {
			return error.response.data;
		}
	};

	// Get Profile me API
	static getProfile = async () => {
		try {
			const res = await axios.get(`/api/v1/user/profile/me`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Get All users API
	static getAllUsers = async () => {
		try {
			const res = await axios.get(`/api/v1/user/all`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Get Active Landers API
	static getActiveLanders = async () => {
		try {
			const res = await axios.get(`/api/v1/user/landers`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Get User Profile API
	static getUserProfile = async (id) => {
		try {
			const res = await axios.get(`/api/v1/user/profile/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Get User Notifications API
	static getUserNotifications = async () => {
		try {
			const res = await axios.get(`/api/v1/notification/user`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Seen Notifications API
	static markSeenNotifications = async () => {
		try {
			const res = await axios.get(`/api/v1/notification/seen`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Timeline Posts API
	static timelinePosts = async () => {
		try {
			const res = await axios.get(`/api/v1/post/timeline`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// User Posts API
	static userPosts = async (id) => {
		try {
			const res = await axios.get(`/api/v1/post/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Stories API
	static getStories = async () => {
		try {
			const res = await axios.get(`/api/v1/story/users`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// All Stories API
	static getAllStories = async () => {
		try {
			const res = await axios.get(`/api/v1/story/all`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// All NFTs API
	static getAllNFT = async () => {
		try {
			const res = await axios.get(`/api/v1/nft/all`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// User's NFTs API
	static getUserNFT = async (id) => {
		try {
			const res = await axios.get(`/api/v1/nft/user/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Owned NFTs API
	static getOwnedNFT = async (id) => {
		try {
			const res = await axios.get(`/api/v1/nft/owned/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Saved NFTs API
	static getSavedNFT = async () => {
		try {
			const res = await axios.get(`/api/v1/nft/saved`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Active NFTs API
	static getActiveNFT = async () => {
		try {
			const res = await axios.get(`/api/v1/nft/active`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};

	// Delete Post API
	static deletePost = async (id) => {
		try {
			const res = await axios.delete(`/api/v1/post/${id}`);
			return res;
		} catch (error) {
			errorHandler(error.response.data);
			return error.response.data;
		}
	};
}
