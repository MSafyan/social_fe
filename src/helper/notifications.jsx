import { toast } from 'react-toastify';

export const Notifications = (type, msg) => {
	switch (type) {
		case 'error': {
			toast.error('' + msg, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		}
		case 'success': {
			toast.success('' + msg, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		}
		case 'info': {
			toast.info('' + msg, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		}
		case 'warning': {
			toast.warning('' + msg, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			break;
		}
		default:
			return;
	}
};
