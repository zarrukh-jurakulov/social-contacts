import React, {useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import axiosClient from '../../helpers/axiosClient'
import { setToken } from '../../helpers/storages'

const LogIn = ({setAuthed}) => {
 

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [alert, setAlert] = useState('')

    const handleUserName = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // if(username.length < 2){
    //   setAlert('Do not write the username less than 2 symbolls')
    // } else if(username.length > 255) {
    //   setAlert('Do not write the username more than 255 symbolls')
    // } else if(password.length < 8) {
    //   setAlert('Do not write the password less than 8 symbolls ')
    // } else if (password.length > 65){
    //   setAlert('Do not write the password more than 65 symbolls')
    // }else {}
 
    const logIn = () => {
          if(username.length < 2){
            setAlert('Do not write the username less than 2 symbolls')
          }else if(username.length > 255) {
            setAlert('Do not write the username more than 255 symbolls')
          }else if(password.length < 8) {
            setAlert('Do not write the password less than 8 symbolls ')
          }else if (password.length > 65){
            setAlert('Do not write the password more than 65 symbolls')
          }else {
            axiosClient().post("/auth/login", {
              username: username,
              password: password,
            }).then((res) => {
              setToken(res.data.token)
              //localStorage.token = ;
              console.log('>> response :', res);

              if(res.status === 200){
                setAuthed(true)
              }
              console.log(res.status);
              
            })
            .catch((err) => {
              console.log('>> error :', err);
            });   
          }
        
       
    }

    return (
           <div className="log_in_page">
            <h3>Log In</h3>
            <div className="alert_container">
              {alert}
            </div>
            <div className='log_in_container'>
                <div>
                  <p>Username</p>
                <input type="text" name="name" id="usename" onChange={handleUserName}/>  
                </div>
                <div>
                   <p>Password</p>
                <input type="password" name="password" id="password" onChange={handlePassword}/> 
                </div>
                
                <button className='submitBtn' onClick={logIn}>Submit</button>
                <div className='changeDirection'>
                    <p>
                        Don't you have an account ? 
                        <Link to="/registration"> Register</Link>
                    </p>
                </div>
            </div>
        </div> 
       
        
    )
}

export default LogIn