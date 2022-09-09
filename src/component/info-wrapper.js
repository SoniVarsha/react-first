import React from 'react'

const InfoWrapper = (props) => {
    const { address, firstName, lastName, description } = props.selectedUser
    console.log(description ,address)

    return (
     
        <>
             <div id="info-content">
                <div><b>User selected:</b> {firstName} {lastName} </div>
                <div>
                    <b>Description: </b>
                    <div className='descriptionBox'> {description}</div>
                </div>
                <div><b>Address:</b>{address.streetAddress}</div>
                <div><b>City:</b> {address.city}</div>
                <div><b>State:</b> {address.stata}</div>
                <div><b>Zip:</b> {address.zip}</div>
            </div>
        </>
    )
}

export default InfoWrapper;