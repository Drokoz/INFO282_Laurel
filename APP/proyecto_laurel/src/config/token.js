
import clienteAxios from "./axios";

const tokenAuth = token =>{
    
    if(token){
        console.log("en token,js", token)
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    }
    else{
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;