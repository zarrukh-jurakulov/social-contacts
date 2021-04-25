import React, {useState} from 'react'
import './style.css'
import axiosClient from '../../helpers/axiosClient'

const CreateContact = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("Uzbekistan")
    const [phoneNumber, setPhoneNumber] = useState("+998")
    const [isFavourite, setIsFavourite] = useState(false)
    console.log(isFavourite);
    const [alert, setAlert] = useState("")

    const [{alt, src}, setImg] = useState({
        
       
    });

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }

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
           // contact_picture: "",
            is_favourite: isFavourite
        })
        .then((res) => {
          
          console.log('res', res);
          if(res.status === 201) {
              setAlert("Contact is created !")
          }
        //  setRegistrationData(res)
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
                <form encType="multipart/form-data">
            
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
                <label htmlFor="photo" className="form-img__file-label">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        {/* <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /> */}
                        {/* <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" /> */}
                    </svg>
                      <img src={src} alt={alt} placeholder="choose avatar" className="form-img__img-preview"/>
                </label>
              
            </div>
        </form>
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
                    <div className='addFavouriteContact'>
                        <input type="checkbox" name="favourite" id="addToFavourite" onChange={()=>setIsFavourite(!isFavourite)}/>
                        <p>Add to Favourite</p>
                    </div>
                
                <button onClick={submitButton}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}

export default CreateContact