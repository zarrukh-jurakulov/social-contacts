import {UsernameTypes, FirstNameTypes, LastNameTypes, EmailTypes, PasswordTypes} from '../constants/sign-up-types'

const initialState = {
    username : "Zarrux",
    firstName : "Zarrux",
    lastName : "Jurakulov",
    email : "zarrukhjurakulov474@gmail.com",
    password : "zarrux6064691"
}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsernameTypes.SET_USERNAME:
            return {...state, username : action.payload}
        case FirstNameTypes.SET_FIRST_NAME:
            return {...state, firstName : action.payload}
        case LastNameTypes.SET_LAST_NAME:
            return {...state, lastName : action.payload}
        case EmailTypes.SET_EMAIL:
            return {...state, email : action.payload}
        case PasswordTypes.SET_PASSWORD:
            return {...state, password : action.payload}    
        default:
            return state;
    }
}