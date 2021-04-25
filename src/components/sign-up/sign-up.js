import React, {useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import axiosClient from '../../helpers/axiosClient'

const Registration = () => {

    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')

//    const [registrationData, setRegistrationData] = useState([])

    const handleUsername = (e) => {
        setUsername(e.target.value)
        if(username.length < 2){
            setAlert('Do not write the username less than 2 symbolls')
        } else if(username.length > 255) {
            setAlert('Do not write the username more than 255 symbolls')
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    } 

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

   
    
    const signUp = () => {

        if(username.length < 2){
            setAlert('Do not write the username less than 2 symbolls')
        } else if(username.length > 255) {
            setAlert('Do not write the username more than 255 symbolls')
        }else if(firstName.length < 2) {
            setAlert('Do not write the first name less than 2 symbolls')
        }else if(firstName.length > 250){
            setAlert('Do not write the first name more than 255 symbolls')
        }else if(lastName.length < 2) {
            setAlert('Do not write the last name less than 2 symbolls')
        }else if(lastName.length >250) {
            setAlert('Do not write the last name more than 255 symbolls')
        }else if(email < 1){
            setAlert("Do not write the email less than 1 symbolls")
        }else if(email.length > 150){
            setAlert('Do not write the email more than 254 symbolls')
        }else if(password.length < 8) {
            setAlert('Do not write the password less than 8 symbolls ')
        }else if (password.length > 65){
            setAlert('Do not write the password more than 65 symbolls')
        }else{
            setAlert("")
            axiosClient().post("/auth/register", {
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password,
            username: username,
        })
        .then((res) => {
          localStorage.token = res.data.token;
          console.log('res', res);
        //  setRegistrationData(res)
        })
        .catch((err) => {
          console.log('err', err);
        });
        }

        
    };



    return (
        <div className='registration_page'>
            <h3>Sign Up</h3> 
            <div className='alert_container'>
                {alert}
            </div>
            <div className='registration_container'>
                <div>
                    <p>Username</p>
                    <input type="text" name="name" id="username" onChange={handleUsername}/>
                </div>
                <div>
                    <p>First Name</p>
                    <input type="text" name="first_name" id="first_name" onChange={handleFirstName}/>
                </div>
                <div>
                    <p>Last Name</p>
                    <input type="text" name="last_name" id="last_name" onChange={handleLastName}/>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" id="email" onChange={handleEmail}/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" id="password" onChange={handlePassword}/>
                </div>
                <button className='registerBtn' onClick={signUp}>Submit</button>
                <div className='changeDirection'>
                    <p>Already have an account? <Link to='/'>Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Registration
