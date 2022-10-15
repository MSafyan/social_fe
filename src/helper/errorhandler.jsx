import { Notifications } from "./notifications";

export const errorHandler = (error) => {
    if (error.status === 400) {
        Notifications('warning', error.message);
    } else if (error.status === 401) {
        Notifications('warning', 'Please login');
    } else if (error.status === 403) {
        Notifications('warning', 'Please login');
    } else if (error.status === 404) {
        Notifications('error', error.message);
    } else if (error.status === 406) {
        Notifications('error', error.message);
    } else if (error.status === 409) {
        Notifications('warning', error.message);
    } else if (error.status === 500) {
        Notifications('error', error.message);
    } else {
        Notifications('error', error.message);
    }
}