import axios from 'axios';
import { push, replace, goBack } from 'connected-react-router';
import { routes } from '../Router'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const createUser = (email, password, username) => async (dispatch) => {
   const newUser = {
      email,
      password,
      username,
   }

   try{
      await axios.post(`${baseURL}/signup`, newUser)
   
      dispatch(push(routes.feed))
   }catch(error) {
      window.alert("Erro ao criar usuário!")
   }
}