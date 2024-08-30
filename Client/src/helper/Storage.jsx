
// COOKIES, LOCAL STORAGE
export const setAuthUser = (data) => {
    // console.log("setAuth", data);
    // Storing the tokens and user data
    console.log("storage.js", data);
    localStorage.setItem("Token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
};

export const getAuthUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
        try {
            const parsedUser = JSON.parse(user);
            return parsedUser;
        } catch (error) {
            console.error('Error parsing user data:', error);
            removeAuthUser(); // Remove corrupted data
        }
}};

export const removeAuthUser = () =>{
    if(localStorage.getItem('user')) localStorage.removeItem('user');
    localStorage.removeItem("Token");
}

export const getToken = () => {
    return localStorage.getItem("Token");
}