import React, { useState } from 'react';

const SignUp = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [resName, setResName] = useState('');
    const [resLoc, setResLoc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // const handleUploadClick = () => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('POST', '/upload');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.onload = () => {
    //       if (xhr.status === 200) {
    //         console.log('File uploaded successfully!');
    //       } else {
    //         console.error('File upload failed:', xhr.responseText);
    //       }
    //     };
    //     xhr.send(selectedFile);
    //   };

    const handleUploadClick = () => {
        // Perform the upload using the selected file
        console.log(selectedFile);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSignUp = () => {
        console.log("hi")
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-100px', marginLeft: '300px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', flex: 1, height: '500px', }}>
                <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '25px', color: 'black' }}>SignUp</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    margin: '2rem auto',
                    maxWidth: '400px',
                    color: 'black'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-10px' }}>
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
                            First Name:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '130px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
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
                            Last Name:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '130px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </label>
                    </div>
                    <label style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '1.2rem',
                        marginTop: '-20px',
                    }}>
                        Email:
                        <input style={{
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'black',
                            fontSize: '1.2rem'
                        }} type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '1.2rem',
                        margin: '-1rem'
                    }}>
                        Password:
                        <input style={{
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'black',
                            fontSize: '1.2rem'
                        }} type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <label style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '1.2rem',
                        margin: '0.1rem'
                    }}>
                        Phone Number:
                        <input style={{
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #ccc',
                            width: '100%',
                            maxWidth: '300px',
                            color: 'black',
                            fontSize: '1.2rem'
                        }}
                            type="tel"
                            id="phoneNumber"
                            value={phone}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="XXX-XXX-XXXX"
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </label>

                    {/* <p>Restaurant's Certificate:</p> */}
                    <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', position: 'absolute', top: '385px', maxWidth: '250px', marginLeft: '-60px' }}>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.2rem',
                            margin: '0.2rem',
                            marginLeft: '8rem'
                        }}>
                            Restaurant's Certificate:
                            <input type="file" onChange={handleFileInputChange} />
                        </label>
                        {selectedFile && <p style={{ fontSize: '17px', color: 'red', display: 'flex', flexDirection: 'row', position: 'absolute', top: '70px' }}>Selected file: {selectedFile.name}</p>}
                        <button style={{
                            margin: '10px',
                            paddingLeft: '10px',
                            padding: '0rem 0.7rem',
                            height: '30px',
                            borderRadius: '0.5rem',
                            backgroundColor: 'gray',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease-in-out'
                        }} onClick={handleUploadClick}>Upload</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '480px' }}>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignContent: 'center',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.1rem',
                            margin: '-0.2rem',
                            marginLeft: '40px',
                        }}>
                            Restaurant's Name:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '150px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={resName} onChange={(event) => setResName(event.target.value)} />
                        </label>
                        <label style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.1rem',
                            margin: '-0.2rem',
                            marginLeft: '1rem'
                        }}>
                            Restaurant's Location:
                            <input style={{
                                padding: '0.5rem',
                                marginBottom: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                width: '100%',
                                maxWidth: '170px',
                                color: 'black',
                                fontSize: '1.2rem'
                            }} type='text' value={resLoc} onChange={(event) => setResLoc(event.target.value)} />
                        </label>
                    </div>
                    <button style={{
                        marginTop: '170px',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease-in-out'
                    }} onClick={handleSignUp} type="submit">SignUp</button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center', justifyContent: 'center', maxWidth: '1000px',
                flex: 1, height: '80vh', borderRadius: '15px', border: 'solid 1px white',
                backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.cAgPjRELM1X7HjZJGGZjKgHaDt&pid=Api&P=0") ', filter: 'blur(3px)',
                backgroundSize: 'cover'
            }}>
            </div>
        </div>
    );
}

export default SignUp