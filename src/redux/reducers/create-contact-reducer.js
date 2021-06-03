import {FirstNameTypes, LastNameTypes, CountryTypes, PhoneNumberTypes} from '../constants/create-contact-types'

const initialState = {
    firstName : "Zarrux",
    lastName : "Jurakulov",
    country : "Uzbekistan",
    phoneNumber : "+998997414691"
}

export const createContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FirstNameTypes.SET_FIRST_NAME:
            return {...state, firstName : action.payload}
        case LastNameTypes.SET_LAST_NAME:
            return {...state, lastName : action.payload}
        case CountryTypes.SET_COUNTRY:
            return {...state, country : action.payload}
        case PhoneNumberTypes.SET_PHONE_NUMBER:
            return {...state, phoneNumber : action.payload}
        default:
            return state;
    }
}