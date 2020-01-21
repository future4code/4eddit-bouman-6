import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const login = (email, password) => async (dispatch) =>{
    const loginInformation = {
        email,
        password,
    }

    try {
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login", loginInformation);
        window.localStorage.setItem("token", response.data.token);

        dispatch(push(routes.feed))
        
    } catch(error) {
        window.alert("Login Invalido")
    }
}