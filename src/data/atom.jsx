import { atom } from "recoil";

export const getProfileMe = atom({
    key: "Get profile me",
    default: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
});

export const getUserProfile = atom({
    key: "Get User profile",
    default: {}
});