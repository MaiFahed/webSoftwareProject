import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'

const SelectedMsg = ({ name, brief, message, date, timeToCollect, userRate, totalPrice, code, phoneNumber, location }) => {

    let [data , setData] = useState([])
    let [loading , setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/user/getUser/${name}`); // Replace with your API endpoint
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            setLoading()
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [loading]);
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
            <p style={{fontWeight:"bold"}}>Name Code:<span id='foot'>{loading ? data[0].firstname : 0}</span></p>
            <p style={{fontWeight:"bold"}}>Phone Code:<span id='foot'>{code}</span></p>
            <p style={{fontWeight:"bold"}}>Generation Code:<span id='foot'>{code}</span></p>
            <p style={{fontWeight:"bold"}}>Total Price:<span id='foot'>{totalPrice}</span></p>
            <p style={{fontWeight:"bold"}}>User Rate:<span id='foot'>{userRate}</span></p>
            <p style={{fontWeight:"bold"}}>Time to collect:<span id='foot'>{timeToCollect}</span></p>
            </div>
        </div>
    );
}

export default SelectedMsg