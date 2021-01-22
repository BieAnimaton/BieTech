export const isAuthenticated = () => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
        return true
    } else {
        return false
    }
};