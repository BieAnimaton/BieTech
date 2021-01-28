import { obterCookie } from './cookieFunctions';

export const isAuthenticated = () => {
    if (obterCookie("ACCESS_TOKEN")) {
        return true
    } else {
        return false
    }
};