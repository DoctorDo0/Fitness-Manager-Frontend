//保存jwt
const jwtKey = "@#jwt-key";

function setJwt(jwt) {
    localStorage.setItem(jwtKey, jwt);
}

function getJwt() {
    return localStorage.getItem(jwtKey);
}

function removeJwt() {
    localStorage.removeItem(jwtKey);
}

export {setJwt, getJwt, removeJwt}