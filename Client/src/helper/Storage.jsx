import { jwtDecode } from "jwt-decode";

// COOKIES, LOCAL STORAGE
export const setAuthUser = (data) => {
    // console.log("storage.js", data);
    localStorage.setItem("AuthUser", JSON.stringify(data));
    localStorage.setItem("Token", JSON.stringify(data.token));
    // localStorage.setItem("user", );
};

export const getAuthUser = () => {
    const user = localStorage.getItem('AuthUser');
    if (user) {
        try {
            const parsedUser = JSON.parse(user);
            return parsedUser;
        } catch (error) {
            console.error('Error parsing user data:', error);
            removeAuthUser();
        }
}};

export const removeAuthUser = () =>{
    if(localStorage.getItem('AuthUser')) {
        localStorage.removeItem('AuthUser');
        localStorage.removeItem('Token');
    }
}

export const getdecodedToken = () => {
    const decodedToken = jwtDecode(localStorage.getItem('Token'));
    return decodedToken;
}

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem('Token'));
    return token;
}
