import React, { useState, useEffect } from "react";
import SelectedDonate from "./SelectedDonate"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectedCheck from "./SelectedCheck";

const DonateBar = () => {
  const [checks, setChecks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCheck, setSelectedCheck] = useState(null);

  useEffect(() => {
    fetch("/donate.json")
      .then((response) => response.json())
      .then((data) => setChecks(data));
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setSelectedCheck(checks[index]);
  };

  const handleRemoveClick = () => {
    toast.success('Payment completed successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
    if (activeIndex !== null) {
      const updatedChecks = [...checks];
      updatedChecks.splice(activeIndex, 1);
      setChecks(updatedChecks);
      setActiveIndex(null);
    }
  };

  const handleAcceptClick = () => {
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