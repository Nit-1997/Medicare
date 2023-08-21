import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "authentication/login",
    async (credentials) => {
        try {
            const user = await authService.login(credentials);
            return user;
        } catch (error) {
            console.log("Error Occured while logging in");
            return error;
        }
    }
);

export const registerThunk = createAsyncThunk(
    "authentication/signup",
    async (payload) => {
        try{
            const user = await authService.register(payload);
            return user;
        }catch (error){
            console.log("Error occured while signup");
            return error;
        }
    }
);

export const logoutThunk = createAsyncThunk(
    "authentication/logout",
    async () => {
        return await authService.logout();
    }
);
export const updateUserThunk = createAsyncThunk(
    "authentication/updateUser",
    async (user) => {
        return user;
    }
);

