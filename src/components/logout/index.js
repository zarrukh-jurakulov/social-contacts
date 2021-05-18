import React from 'react'
import {removeToken} from '../../helpers/storages'

import {useHistory} from 'react-router-dom'

const Logout = () => {

    let history = useHistory()

   const logout = () => {
       removeToken()
        history.push("/")
   }

     
    return (
        <div className="logout"> 
        <button className="logoutBtn" onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout