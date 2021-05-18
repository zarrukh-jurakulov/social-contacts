import React, {useState, useEffect} from 'react'
import axiosClient from '../../helpers/axiosClient'
import DeleteContact from './delete-contact'
import {AiOutlineHeart as FavouritesIcon, AiFillHeart as RemoveIcon} from 'react-icons/ai'
import FavouriteContacts from './favourite-contacts'
import {setFavorites,removeFavorites, getFavorites } from '../../helpers/storages'
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
             
                <p>{i.first_name}</p>
                <p>{i.last_name}</p>
              </div>

              <div className="card-end">
                <p>{i.country_code}</p>
                <p>{i.phone_number}</p>
                <DeleteContact id={i.id} />
            
               
              </div>
                 
            </div>)}
              
        </div>
    )
}

export default ContactList