import { Button } from 'bootstrap';
import React from 'react'

const SelectedMsg = ({ name, brief, message, date, timeToCollect, userRate, totalPrice, code, phoneNumber, location }) => {
    return (
        <div className='msgContainer'>
            <div className='msgHeader'>
                <div className='praghHead'>
                    <p id='pHeader'>{name}</p>
                    <p id='pHeader'>   Ordered <span style={{color:"red"}}>{brief}</span> box</p>
                </div>
                <div className='icon'>
                    <span>{date}</span>
                </div>
            </div>

            <div className='msgFooter'>
            <p style={{fontWeight:"bold"}}>Generation Code:<span id='foot'>{code}</span></p>
            <p style={{fontWeight:"bold"}}>Total Price:<span id='foot'>{totalPrice}</span></p>
            <p style={{fontWeight:"bold"}}>User Rate:<span id='foot'>{userRate}</span></p>
            <p style={{fontWeight:"bold"}}>Time to collect:<span id='foot'>{timeToCollect}</span></p>
            </div>
        </div>
    );
}

export default SelectedMsg