import {CreateContactTypes,FirstNameTypes,LastNameTypes,CountryTypes,PhoneNumberTypes} from '../constants/create-contact-types'

export const setCreateContact = (createContact) => {
    return {
        type : CreateContactTypes.SET_CREATE_CONTACT,
        payload : createContact
    }
}

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

export const setCountry = (country) => {
    return {
        type : CountryTypes.SET_COUNTRY,
        payload : country
    }
}

export const setPhoneNumber = (phoneNumber) => {
    return {
        type : PhoneNumberTypes.SET_PHONE_NUMBER,
        payload : phoneNumber
    }
}