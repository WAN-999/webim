import axios from "axios";

export async function userLogin(user){
    try {
        const res = await axios.post('/api/login/login', user);
        return res;
    } catch (err) {
        return err;
    }
}

export async function getAllUser(){
    try {
        const res = await axios.get('/api/users');
        return res;
    } catch (err) {
        return err;
    }
}

export async function userRegister(user){
    try{
        const res = await axios.post('api/login/register', user);
        return res;
    } catch (err) {
        return err;
    }
}