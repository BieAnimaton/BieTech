export function obterCookie(name) {
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

export function mostrarToken() {
    try {
      var cookieArr = document.cookie.split(";");
    
      for(var i = 0; i < cookieArr.length; i++)
          var cookiePair = cookieArr[i].split("=");
          
      cookiePair[1].trim();
      document.querySelector(".token").innerHTML = decodeURIComponent(cookiePair[1]);
    } catch {
      document.location.reload(true);
    }
  }

  export function criarCookie(name, token) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 300*1000;
    now.setTime(expireTime);
  
    document.cookie = name + "=" + token + "; expires=" + now.toUTCString() + "; path=/";
  }

  export function decodificarCookie (token) {
    try {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    
      return JSON.parse(jsonPayload);
    } catch {
      document.location.reload(true);
    }
  };