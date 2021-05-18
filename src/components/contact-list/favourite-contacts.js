import React, {useState} from 'react'
import {AiOutlineHeart as FavouritesIcon, AiFillHeart as RemoveIcon} from 'react-icons/ai'


const FavouriteContacts = ({onClick}) => {

    const [favouriteBtn, setFavouriteBtn] = useState(false)

    

    return (
       <div>
            <button onClick={()=>{setFavouriteBtn(!favouriteBtn); onClick()}}>
            {favouriteBtn ? <RemoveIcon /> : <FavouritesIcon />}
            </button>
        </div>  
    )
}

export default FavouriteContacts