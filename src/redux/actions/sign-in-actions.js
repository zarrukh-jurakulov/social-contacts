import {UsernameTypes, PasswordTypes} from '../constants/sign-in-types'
import axiosClient from '../../helpers/axiosClient'
import {useHistory} from 'react-router-dom'
import setToken from '../../helpers/axiosClient'

export const setUsername = (username) => {
    return {
        type : UsernameTypes.SET_SIGN_IN,
        payload : username
    }
}

export const setPassword = (password) => {
    return {
        type : PasswordTypes.SELECTED_SIGN_IN,
        payload : password
    }   
}

export const signInRequest = async(dispatch) => {
    await axiosClient().post("/auth/login")
    .then((res) => {
        setToken(res.data.token)
        dispatch({
            type: "SIGN_IN",
            payload: res
        })
          console.log('>> response :', res);
          if(res.status === 200){
          let history = useHistory()
          history.push("/profile")
        }
        })
        .catch((err) => {
          console.log('>> error :', err);
        });  
}


