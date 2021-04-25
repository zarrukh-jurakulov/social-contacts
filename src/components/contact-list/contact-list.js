import React, {useState, useEffect} from 'react'
import axiosClient from '../../helpers/axiosClient'
import DeleteContact from './delete-contact'

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './style.css'

const ContactList = () => {

    const [getContact, setGetContact] = useState([])
    const [isFavourite, setIsFavourite] = useState(false)

console.log(isFavourite);
    useEffect(() => {
      myContacts()
    }, [])

    const myContacts = () => {
      
    axiosClient().get("/contacts/")
    .then((res) => {
      
      
      setGetContact(res.data)
        console.log("submit", getContact);
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
                <img src={i.contact_picture} alt="logo" />
                <p>{i.first_name}</p>
                <p>{i.last_name}</p>
              </div>

              <div className="card-end">
                <p>{i.phone_number}</p>
                <DeleteContact id={i.id} />
                <button onClick={()=> setIsFavourite(!isFavourite)}>
                  {isFavourite ? <AiFillHeart/> : <AiOutlineHeart />}
                </button>
              </div>
                 
            </div>)}
           
        </div>
    )
}

export default ContactList