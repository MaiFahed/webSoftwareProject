import React, { useState, useEffect } from "react";
import SelectedCheck from "./SelectedCheck";

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
                    {selectedCheck && (
                        <SelectedCheck firstName={selectedCheck.firstName} lastName={selectedCheck.lastName}
                            resName={selectedCheck.resName} location={selectedCheck.location} email={selectedCheck.email}
                            lat={selectedCheck.lat} long={selectedCheck.long} phoneNumber={selectedCheck.phoneNumber}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResChecksBar;