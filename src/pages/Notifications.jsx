import React, { useState } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handlePush = () => {
        let values = {
            "to": "ExponentPushToken[KnnDHCAG6rMhVtVuPL96uG]",
            "title": title,
            "body": desc,
            "sound": "default",
            "icon": "notification"
        }

        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/notification`, {
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

        toast.success('Successfully notified', {
            position: toast.POSITION.TOP_RIGHT,
        });
        setTitle('');
        setDesc('');
    }
    const buttonStyles = {
        backgroundColor: 'red',
        marginTop: '20px',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <>
            <AdminNavBar />
            <div style={{ display: 'flex', justifyContent: 'center', height: '70vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-90px', marginLeft: '330px', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, height: '500px', }}>
                    <div style={{ marginTop: '100px', fontWeight: 'bold', fontSize: '30px', color: 'red', paddingLeft: '30px' }}>Push Notifications</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        margin: '2rem auto',
                        maxWidth: '400px',
                        color: 'black'
                    }}>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%'
                        }}>
                            Title:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                placeHolder: 'password',
                                width: '100%',
                                maxWidth: '300px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} placeholder="Enter the title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                        </label>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%'
                        }}>
                            Description:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '300px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} placeholder="Enter notificatons' description" type="text" value={desc} onChange={e => setDesc(e.target.value)} />
                        </label>
                        <button
                            onClick={handlePush}
                            style={buttonStyles} type="submit">Push
                        </button>
                        <ToastContainer />
                    </div>
                </div>
                <div style={{
                    display: 'flex', paddingRight: '180px',
                    alignItems: 'flex-end', justifyContent: 'center', maxWidth: '1000px',
                    flex: 1, height: '70vh', borderRadius: '15px', border: 'solid 1px white',
                    backgroundImage: 'url("https://cdn.icon-icons.com/icons2/1283/PNG/512/1497619898-jd24_85173.png") ',
                    backgroundSize: 'cover'
                }}>
                </div>
            </div>
        </>
    );
}

export default Notifications