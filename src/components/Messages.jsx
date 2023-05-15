import React, { useState, useEffect } from "react";
import SelectedMsg from "./SelectedMsg";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        fetch("/mails.json")
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setSelectedMessage(messages[index]);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {messages.map((message, index) => (
                            <li
                                key={index}
                                className={`list-group-item ${index === activeIndex ? "active" : ""
                                    }`}
                                onClick={() => handleItemClick(index)}
                            >
                                <h5>{message.name}</h5>
                                <p id="brief">{message.brief}</p>
                                <small>{new Date(message.date).toLocaleDateString()}</small>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-8">
                    {selectedMessage && (
                        <SelectedMsg name={selectedMessage.name} brief={selectedMessage.brief}
                            message={selectedMessage.message} date={selectedMessage.date}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Messages;