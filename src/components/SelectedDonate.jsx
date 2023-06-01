import { Button } from 'bootstrap';
import React from 'react'

const SelectedDonate = ({ resName, email, orgName, totalPrice, quantity, payment, onClick1, onClick2, date ,checkPayment}) => {
  return (
    <div className='msgContainer'>
      <div className='msgHeader'>
        <div className='praghHead'>
          <p id='pHeader'>{email}</p>
          <p id='pHeader'> <span id='headEmail'>{orgName}</span> </p>
        </div>
        {payment == 'No' ?  <div className='accDec'>
          <button onClick={onClick1} type="button" class="btn btn-success">Paid</button>
          <button onClick={onClick2} type="button" class="btn btn-danger">Unpaid</button>
        </div> : null}
      </div>

      <div className='msgFooter'>
        <p style={{ fontWeight: "bold" }}>Donation mount:<span id='foot'>{quantity} boxes</span></p>
        <p style={{ fontWeight: "bold" }}>Total Price:<span id='foot'>{totalPrice}</span></p>
        <p style={{ fontWeight: "bold" }}>OragnizationName :<span id='foot'>{orgName}</span></p>
      </div>
    </div>
  );
}

export default SelectedDonate