// COOKIES, LOCAL STORAGE
export const setAuthUser = (data) => {
    console.log("storage.js", data);
    localStorage.setItem("Token", JSON.stringify(data));
    // localStorage.setItem("user", );
};

export const getAuthUser = () => {
    const user = localStorage.getItem('Token');
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
    if(localStorage.getItem('Token')) 
        localStorage.removeItem('Token');
}

export const getToken = () => {
    return localStorage.getItem("Token");
}
