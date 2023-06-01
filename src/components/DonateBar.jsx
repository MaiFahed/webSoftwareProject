import React, { useState, useEffect } from "react";
import SelectedDonate from "./SelectedDonate"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectedCheck from "./SelectedCheck";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DonateBar = () => {
  const [checks, setChecks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [resName, setResName] = useState('');
  const [itemId, setItemId] = useState()
  const [payment, setPayment] = useState()
  const [click , setClick] = useState(false)
  let getUserInfo = async () => {
    setResName(await AsyncStorage.getItem("resName"))
  }
  useEffect(() => {
    getUserInfo()
    let values = {
      resName: resName
    }
    fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/donate/getDonate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setChecks(data)
      })
      .catch(error => console.log(error));
  }, [resName,click]);

  useEffect(()=> {
    setClick(!click)
  }, [])

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setSelectedCheck(checks[index]);
    setItemId(checks[index]._id)
    setPayment(checks[index].payment)
    console.log(itemId)
    console.log(payment)
  };

  const handleRemoveClick = () => {
    let values = {
      "id": itemId,
      payment: "Yes",
      resName: resName
    }
    fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/donate/updatePay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error));
    // toast.success('Payment completed successfully', {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
    // if (activeIndex !== null) {
    //   const updatedChecks = [...checks];
    //   updatedChecks.splice(activeIndex, 1);
    //   setChecks(updatedChecks);
    //   setActiveIndex(null);
    // }
  };

  const handleAcceptClick = () => {
    let values = {
      "id": itemId,
      payment: "No",
      resName: resName
    }
    fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/donate/updatePay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error));
    toast.success('Boxes are back in stock', {
      position: toast.POSITION.TOP_RIGHT,
    });
    if (activeIndex !== null) {
      const updatedChecks = [...checks];
      updatedChecks.splice(activeIndex, 1);
      setChecks(updatedChecks);
      setActiveIndex(null);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            {checks.map((check, index) => (
              <li
                key={index}
                className={`list-group-item ${index === activeIndex ? "active" : ""
                  }`}
                onClick={() => handleItemClick(index)}
              >
                <h5>{check.email}</h5>
                <p id="brief">{check.orgName}</p>
                <small>{new Date(check.createAt).toLocaleDateString()}</small>
              </li>
            ))}
          </ul>

        </div>
        <div className="col-md-8">
          {activeIndex !== null && (
            <SelectedDonate onClick1={handleRemoveClick} onClick2={handleAcceptClick}
              resName={selectedCheck.resName} email={selectedCheck.email}
              orgName={selectedCheck.orgName} totalPrice={selectedCheck.totalPrice}
              quantity={selectedCheck.quantity} payment={selectedCheck.payment}
            />
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default DonateBar