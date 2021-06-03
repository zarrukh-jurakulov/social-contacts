import {UsernameTypes, FirstNameTypes, LastNameTypes, EmailTypes, PasswordTypes} from '../constants/sign-up-types'

export const setUsername = (username) => {
    return {
        type : UsernameTypes.SET_USERNAME,
        payload : username
    };
};

export const setFirstName = (firstName) => {
    return {
        type : FirstNameTypes.SET_FIRST_NAME,
        payload : firstName
    }
}

export const setLastName = (lastName) => {
    return {
        type : LastNameTypes.SET_LAST_NAME,
        payload : lastName
    }
}

export const setEmail = (email) => {
    return {
        type : EmailTypes.SET_EMAIL,
        payload : email
    }
}

export const setPassword = (password) => {
    return {
        type : PasswordTypes.SET_PASSWORD,
        payload : password
    }
}