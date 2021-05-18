import React, {useState} from 'react'


const SearchContact = () => {
   
    const [search, setSearch] = useState("")
    const {getContact, setGetContact} = useState()
   
    const searchContact = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
      
      
    }

    return (
        <div>
           <input type="search" name="search" id="search_input" onChange={searchContact} />
        </div>
    )
}



export default SearchContact