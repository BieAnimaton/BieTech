function obterCookie(name) {
    // Separa em array
    var cookieArr = document.cookie.split(";");
    
    // Da um loop
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        //Remove espações e compara
        if(name == cookiePair[0].trim()) {
            // Decodifica e retorna
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Caso falhe, retorna nada
    return null;
}

export const isAuthenticated = () => {
    if (obterCookie("ACCESS_TOKEN")) {
        return true
    } else {
        return false
    }
};