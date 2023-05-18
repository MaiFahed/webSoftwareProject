import React, { useState, useEffect } from "react";
import SelectedCheck from "./SelectedCheck";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResChecksBar() {
    const [checks, setChecks] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedCheck, setSelectedCheck] = useState(null);

    useEffect(() => {
        fetch("/checks.json")
            .then((response) => response.json())
            .then((data) => setChecks(data));
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setSelectedCheck(checks[index]);
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
                            resName={selectedCheck.resName} location={selectedCheck.location} email={selectedCheck.email}
                            lat={selectedCheck.lat} long={selectedCheck.long} phoneNumber={selectedCheck.phoneNumber}
                        />
                    )}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default ResChecksBar;