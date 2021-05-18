import React from 'react'
import axiosClient from '../../helpers/axiosClient'


const DeleteContact = ({id}) => {
    
    const deleteButton = () => {
        axiosClient().delete(`/contacts/${id}`)
        .then((res) => {
         console.log(res)
        window.location.reload(false)
        })
        .catch((err) => {
          console.log('err', err);
        });
    }

    return (
        <div>
            <button className="deleteBtn" onClick={deleteButton}>x</button>
        </div>
    )
}

export default DeleteContact