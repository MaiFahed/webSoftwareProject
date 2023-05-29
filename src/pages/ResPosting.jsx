import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResPosting = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [resName, setResName] = useState('');
    const [boxNo, setBoxNo] = useState(0);
    const [des, setDes] = useState('');
    const [old, setOld] = useState(0);
    const [newp, setNew] = useState(0);
    const [from, setFrom] = useState('');
    const [fromPeriod, setFromPeriod] = useState('');
    const [fromD, setFromD] = useState('');
    const [to, setTo] = useState('');
    const [toD, setToD] = useState('');
    const [toPeriod, setToPeriod] = useState('');
    const [email , setUserEmail] = useState('')
    const [click , setClick] = useState(false)
    const [prodcutId , setProductId] = useState('')
    useEffect (() => {
        AsyncStorage.getItem('user')
        .then(data => {
            setUserEmail(data)
            setClick(!click)
        })
    } , [resName])

    useEffect(()=> {
        let values = {
            email : email
        }
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/prodcut/getInfo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setBoxNo(result[0].boxNo)
            setDes(result[0].description)
            setResName(result[0].resName)
            setSelectedOption(result[0].category)
            setOld(result[0].price['oldPrice'])
            setNew(result[0].price['newPrice'])
            let arr = result[0].timeToCollect.split('-')
            console.log(arr[1])
            setFrom(convertTo24Hour(arr[0]))
            setTo(convertTo24Hour(arr[1]))
            setFromD(arr[0])
            setToD(arr[1])
            setSelectedOption2(result[0].available)
            setProductId(result[0]._id)
        })
        .catch(error => console.log(error));
    } ,[click])

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectChange2 = (event) => {
        setSelectedOption2(event.target.value);
    }
    let updateInfo = () => {
        let values = {
            category : selectedOption ,
            resName : resName ,
            boxNo : boxNo ,
            price :{
                oldPrice : old ,
                newPrice : newp
            } ,
            timeToCollect : `${fromD} ${fromPeriod}-${toD} ${toPeriod}` ,
            description : des ,
            available : selectedOption2
            
        }
        console.log(values)
        fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/prodcut/updateProduct/${prodcutId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
        .then(response => response.json())
        .then(data => {
            setClick(!click)
        })
    }

    let handleFfrom = (event) => {
        const selectedTime = event.target.value;
        let conv = convertTo12HourFormat(selectedTime)
        setFrom(selectedTime)
        setFromD(conv.split(' ')[0])
        setFromPeriod(conv.split(' ')[1])
    }

    let handleTo = (event) => {
        const selectedTime = event.target.value;
        let conv = convertTo12HourFormat(selectedTime)
        setTo(selectedTime)
        setToD(conv.split(' ')[0])
        setToPeriod(conv.split(' ')[1])
    }

    const convertTo12HourFormat = (time) => {
        const [hours, minutes] = time.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString([], options);
    };

    const convertTo24Hour = (time) =>  {
        var hours = parseInt(time.substr(0, 2));
        var minutes = parseInt(time.substr(3, 2));
        var period = time.substr(6, 2).toLowerCase();
      
        if (period === 'pm' && hours !== 12) {
          hours += 12;
        } else if (period === 'am' && hours === 12) {
          hours = 0;
        }
      
        var formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
        return formattedTime;
      }

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', height: '85vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-120px', marginLeft: '330px', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', flex: 1, height: '500px', }}>
                    <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '25px', color: 'red' }}>Post your box's information</div>
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
                            width: '100%',
                            marginTop: '30px',
                            fontSize: '1.2rem',
                            margin: '-0.5rem'
                        }} htmlFor="dropdown">Category:</label>
                        <select style={{
                            padding: '0.5rem',
                            marginBottom: '0rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'gray',
                            fontSize: '1.2rem',
                        }} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Sweet">Sweet</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Lunch">Lunch</option>
                            <option value="FastFood">FastFood</option>
                            <option value="Burger">Burger</option>
                            <option value="Pizza">Pizza</option>
                            <option value="None">None</option>
                        </select>

                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.2rem',
                        }}>
                            Restaurant name:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '300px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={resName} onChange={e => setResName(e.target.value)} />
                        </label>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.2rem',
                            margin: '-1rem'
                        }}>
                            Number of box:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '0.5rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '300px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='number' value={boxNo} onChange={(event) => setBoxNo(event.target.value)} />
                        </label>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.2rem',
                            margin: '0.6rem'
                        }}>
                            Describe your box:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '300px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={des} onChange={e => setDes(e.target.value)} />
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '460px' }}>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '1.2rem',
                                margin: '-0.2rem',
                                marginLeft: '0.5rem'
                            }}>
                                Old price:
                                <input style={{
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid #ccc',
                                    width: '100%',
                                    maxWidth: '130px',
                                    color: 'black',
                                    fontSize: '1.2rem'
                                }} type='number' value={old} onChange={(event) => setOld(event.target.value)} />
                            </label>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '1.2rem',
                                margin: '-0.2rem',
                                marginLeft: '1rem'
                            }}>
                                New price:
                                <input style={{
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid #ccc',
                                    width: '100%',
                                    maxWidth: '130px',
                                    color: 'black',
                                    fontSize: '1.2rem'
                                }} type='number' value={newp} onChange={(event) => setNew(event.target.value)} />
                            </label>
                        </div>
                        {/* <p>Time to collect</p> */}
                        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '550px' }}>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '1.2rem',
                                margin: '-0.2rem',
                                marginLeft: '0.5rem'
                            }}>
                                from:
                                <input style={{
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid #ccc',
                                    width: '100%',
                                    maxWidth: '130px',
                                    color: 'black',
                                    fontSize: '1.2rem'
                                }} type='time' value={from} onChange={handleFfrom} />
                            </label>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '1.2rem',
                                margin: '-0.2rem',
                                marginLeft: '1rem'
                            }}>
                                to:
                                <input style={{
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid #ccc',
                                    width: '100%',
                                    maxWidth: '130px',
                                    color: 'black',
                                    fontSize: '1.2rem'
                                }} type='time' value={to} onChange={handleTo} />
                            </label>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '1.2rem',
                                margin: '-0.2rem',
                                marginLeft: '1rem'
                            }} htmlFor="dropdown">Avaliable:</label>
                        <select style={{
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'gray',
                            fontSize: '1.2rem',
                        }} id="dropdown" value={selectedOption2} onChange={handleSelectChange2}>
                            <option value="">--Please choose an option--</option>
                            <option value="true">YES</option>
                            <option value="false">NO</option>
                        </select>
                        </div>

                        <button onClick = {updateInfo} style={{
                            marginTop: '170px',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            backgroundColor: 'red',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease-in-out'
                        }} type="submit"> Update </button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center', justifyContent: 'center', maxWidth: '1000px',
                    flex: 1, height: '80vh', borderRadius: '15px', marginTop: '20px',
                    backgroundImage: 'url("https://cdn3.iconfinder.com/data/icons/30-communication-connectivity-part-2/202/Post-512.png") ',
                    backgroundSize: 'cover'
                }}>
                </div>
            </div>
        </>
    );
}

export default ResPosting