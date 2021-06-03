import { UsernameTypes, PasswordTypes } from '../constants/sign-in-types'

const initialState = {
    username : "Zarrux",
    password : "zarrux6064691"
};

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsernameTypes.SET_USERNAME:
            return {...state, username : action.payload}
        case PasswordTypes.SET_PASSWORD:
            return {...state, password : action.payload}
        default:
            return state
    }
}

