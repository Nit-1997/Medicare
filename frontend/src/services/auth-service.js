import requestMethods from "../apis/base";
const USERS_URL = "/authentication";

export const login = async ({ email, password }) => {
    try{
        const response = await requestMethods.post(`${USERS_URL}/signin`, {
            email,
            password,
        });
        const user = response.data;
        return user;
    }catch (e) {
        console.log("Error in login auth service")
        return e;
    }
};

export const logout = async () => {
    const response = await requestMethods.post(`${USERS_URL}/logout`);
    return response.data;
};


export const register = async (user) => {
    try{
        const response = await requestMethods.post(`${USERS_URL}/signup`, user);
        const responseUser = response.data;
        return responseUser;
    }catch (e){
        return e;
    }
};
