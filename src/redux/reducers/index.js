import {combineReducers} from 'redux'
import {signInReducer} from './sign-in-reducer'
import {signUpReducer} from './sign-up-reducer'
import {createContactReducer} from './create-contact-reducer'

const reducers = combineReducers({
    signInReducer : signInReducer,
    signUpReducer : signUpReducer,
    createContactReducer : createContactReducer
})

export default reducers