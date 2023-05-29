import { Button } from 'bootstrap';
import React from 'react'

const SelectedCheck = ({ firstName, lastName, resName, location, email, phoneNumber, long, lat, onClick1, onClick2 , date }) => {
    return (
        <div className='msgContainer'>
            <div className='msgHeader'>
                <div className='praghHead'>
                    <p id='pHeader'>{resName}</p>
                    <p id='pHeader'> <span id='headEmail'>{email}</span> </p>
                </div>
                <div className='accDec'>
                    <button onClick={onClick2} type="button" class="btn btn-success">Accept</button>
                    <button onClick={onClick1} type="button" class="btn btn-danger">Decline</button>
                </div>
            </div>

            <div className='msgFooter'>
                <p style={{fontWeight:"bold"}}>Full Name:<span id='foot'>{firstName} {lastName}</span></p>
                {/* <p style={{fontWeight:"bold"}}>Password:<span id='foot'>{Password}</span></p> */}
                <p style={{fontWeight:"bold"}}>Phone number:<span id='foot'>{phoneNumber}</span></p>
                <p style={{fontWeight:"bold"}}>Email:<span id='foot'>{email}</span></p>
                <p style={{fontWeight:"bold"}}>Restaurant's name:<span id='foot'>{resName}</span></p>
                <p style={{fontWeight:"bold"}}>Restaurant's Location:<span id='foot'>{location}</span></p>
                <p style={{fontWeight:"bold"}}>Restaurant's Latitude:<span id='foot'>{lat}</span></p>
                <p style={{fontWeight:"bold"}}>Restaurant's Longitude:<span id='foot'>{long}</span></p>
                <p style={{fontWeight:"bold"}}>Date:<span id='foot'>{date}</span></p>
            </div>
        </div>
    );
}

export default SelectedCheck