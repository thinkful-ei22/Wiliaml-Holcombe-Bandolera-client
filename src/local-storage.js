export const loadAuthToken = () => {
    const token = localStorage.getItem('authToken');
    //console.log(token);
    return token

    
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};