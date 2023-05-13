import React, { useState } from 'react';

const ResPosting = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [resName, setResName] = useState('');
    const [boxNo, setBoxNo] = useState(0);
    const [des, setDes] = useState('');
    const [old, setOld] = useState(0);
    const [newp, setNew] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-100px', marginLeft: '300px', backgroundColor: 'white' }}>
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
                    }} htmlFor="dropdown">Title:</label>
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
                        <option value="option1">Sweet</option>
                        <option value="option2">Breakfast</option>
                        <option value="option3">dinner</option>
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
                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'black',
                            fontSize: '1.2rem'
                        }} type='number' value={boxNo} onChange={(event) => setBoxNo(event.target.value)}/>
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
                    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '410px' }}>
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
                            }} type='number' value={old} onChange={(event) => setOld(event.target.value)}/>
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
                    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '500px' }}>
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
                            }} type='time' value={from} onChange={e => setFrom(e.target.value)} />
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
                            }} type='time'  value={to} onChange={e => setTo(e.target.value)} />
                        </label>
                    </div>
                    <button style={{
                        marginTop: '170px',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'red',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease-in-out'
                    }} type="submit">Post</button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center', justifyContent: 'center', maxWidth: '1000px',
                flex: 1, height: '80vh', borderRadius: '15px',
                backgroundImage: 'url("https://cdn3.iconfinder.com/data/icons/30-communication-connectivity-part-2/202/Post-512.png") ',
                backgroundSize: 'cover'
            }}>
            </div>
        </div>
    );
}

export default ResPosting