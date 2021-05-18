import React, {useState} from 'react'
import './style.css'
import axiosClient from '../../helpers/axiosClient'
import { useHistory } from "react-router-dom";
const CreateContact = () => {

    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("Uzbekistan")
    const [phoneNumber, setPhoneNumber] = useState("+998")
    const [isFavourite, setIsFavourite] = useState(false)
   
    const [alert, setAlert] = useState("")
    let history = useHistory();
    
    
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNumber = (e) => {
        setLastName(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }



 

    const submitButton = () => {
        axiosClient().post("/contacts/", {
            country_code: country,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
         
        })
        .then((res) => {
          
          console.log('res', res);
          if(res.status === 201) {
              setAlert("Contact is created !")
              history.goBack()
          }
        
        })
        .catch((err) => {
          console.log('err', err);
        });
        
    }
 
    return (
        <div className="createContactPage">
            <div className="message-container">
                <div className="success-message">
                    {alert}
                </div>
            </div>
            <div className="newContactContainer">
                <div className="newContactImg">
               
                </div>
                <div className="newContactInfo">
                    <div className="firstName">
                        <p>First Name</p>
                        <input type="text" name="firstName" id="firstName" onChange={handleFirstName}/>
                    </div>
                    <div className="lastName">
                        <p>Last Name</p>
                        <input type="text" name="lastName" id="lastName" onChange={handleLastNumber}/>
                    </div>
                    <div className="infoItemsContainer">
                        <p>Country</p>
                        <input type="text" name="country" id="country" value={country} onChange={handleCountry}/>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <input type="tel" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} />
                    </div>
                </div>
                <div className='saveContact'>
                   
                
                <button onClick={submitButton}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}

export default CreateContact