import React, {useState, useEffect} from 'react'
import axiosClient from '../../helpers/axiosClient'
import DeleteContact from './delete-contact'
import avatar from '../../assets/man-303792_1280.png'


import './style.css'

const ContactList = () => {

    const [getContact, setGetContact] = useState([])
   
    
    useEffect(() => {
      myContacts()
    }, [])

    const myContacts = () => {
      axiosClient().get("/contacts/")
        .then((res) => {
        setGetContact(res.data)
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log('err', err);
      });
    }

    
    
      return (
        <div className="contact-list-container">
         
            {getContact.map((i, index)=> 
            <div className="contact-list-card" key={index}>
              
              <div className="card-start">
                <img src={avatar} alt="avatar" className="avatar" />
                <p>{i.first_name}</p>
                <p>{i.last_name}</p>
              </div>

              
                <p>{i.country_code}</p>
                <p>{i.phone_number}</p>
                <DeleteContact id={i.id} />
            </div>)}
               
        </div>
    )
}

export default ContactList