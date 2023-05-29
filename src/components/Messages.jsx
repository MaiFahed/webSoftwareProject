import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import SelectedMsg from "./SelectedMsg";
import { Button } from "bootstrap";



function Messages() {

    const [messages, setMessages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [data, setData] = useState([])
    const [resName, setResName] = useState()
    const [click, setClick] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('resName')
            .then(data => {
                setResName(data)
                setClick(!click)
            })
    }, [resName])
    useEffect(() => {

        let values = {
            resName: resName
        }
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/order/getOrders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(result => {
                const reversedMap = [...result].reverse().map(x => {
                    return x;
                });
                setMessages(reversedMap)
                console.log(reversedMap)
            })
            .catch(error => console.log(error));
    }, [click]);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setSelectedMessage(messages[index]);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {isButtonClicked ? null : (
                        <ul className="list-group">
                            {messages.map((message, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item ${index === activeIndex ? "active" : ""
                                        }`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <h5>{message.email}</h5>
                                    {/* <p id="brief">{message.createAt}</p> */}
                                    <small>{new Date(message.createAt).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-md-8">
                    {selectedMessage && !isButtonClicked && (
                        <SelectedMsg name={selectedMessage.email} brief={selectedMessage.quantity}
                            message={selectedMessage.paymentType} date={new Date(selectedMessage.createAt).toLocaleDateString()}
                            timeToCollect={selectedMessage.timeToCollect} userRate={selectedMessage.userRate}
                            code={selectedMessage.randomNumberCode} totalPrice={selectedMessage.totalPrice}
                        />
                    )}
                </div>
            </div>
            <div style={{ position: "absolute", marginTop: '465px', marginLeft: '100px' }}>
                <button onClick={() => setIsButtonClicked(true)} type="button" class="btn btn-danger">Clear All</button>
            </div>
        </div>
    );
}

export default Messages;