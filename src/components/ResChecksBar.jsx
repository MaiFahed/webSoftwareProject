import React, { useState, useEffect } from "react";
import SelectedCheck from "./SelectedCheck";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResChecksBar() {
    const [checks, setChecks] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedCheck, setSelectedCheck] = useState(null);
    const [userEmail , setUserEmail] = useState("")
    useEffect(() => {
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/pending/getPendingResturants`)
            .then((response) => response.json())
            .then((data) => {
                setChecks(data)
            });
    }, []);

    const handleItemClick = (index , email) => {
        setActiveIndex(index);
        setSelectedCheck(checks[index]);
        setUserEmail(email)
        
    };

    const handleRemoveClick = () => {
        toast.success('Declined successfully', {
            position: toast.POSITION.TOP_RIGHT,
        });
        if (activeIndex !== null) {
            const updatedChecks = [...checks];
            updatedChecks.splice(activeIndex, 1);
            setChecks(updatedChecks);
            setActiveIndex(null);
        }
        let values = {
            email : userEmail
        }
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/pending/deleteResturant`, {
            method: 'DELETE',
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
    };

    const handleAcceptClick = () => {
        toast.success('Accepted successfully', {
            position: toast.POSITION.TOP_RIGHT,
        });
        if (activeIndex !== null) {
            const updatedChecks = [...checks];
            updatedChecks.splice(activeIndex, 1);
            setChecks(updatedChecks);
            setActiveIndex(null);
        }
        let values = {
            email : userEmail
        }
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/pending/acceptResturant`, {
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
                                onClick={() => handleItemClick(index ,check.email)}
                            >
                                <h5>{check.resName}</h5>
                                <p id="brief">{check.firstName} {check.lastName}</p>
                                <small>{check.email}</small>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="col-md-8">
                    {activeIndex !== null && (
                        <SelectedCheck onClick1={handleRemoveClick} onClick2={handleAcceptClick} firstName={selectedCheck.firstName} lastName={selectedCheck.lastName}
                            resName={selectedCheck.resName} location={selectedCheck.location[1].city} email={selectedCheck.email}
                            lat={selectedCheck.location[0].latitude} long={selectedCheck.location[0].longitude} phoneNumber={selectedCheck.phoneNumber}
                            date = {selectedCheck.dateOfAnnouncment}
                        />
                    )}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default ResChecksBar;