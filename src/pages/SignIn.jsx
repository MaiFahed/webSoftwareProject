import React, { useState } from 'react';
import Orders from './Orders';
import ResPosting from './ResPosting';
import SignUp from './SignUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log("hi");
  };

  const buttonStyles = {
    backgroundColor: '#0070f3',
    marginTop: '20px',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '70vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-90px', marginLeft: '330px', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, height: '500px', }}>
        <div style={{ marginTop: '100px', fontWeight: 'bold', fontSize: '40px', color: 'black' }}>SignIn</div>
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
            Email:
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
            }} placeholder="Enter your email address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            width: '100%'
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
            }} placeholder="Enter your password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <a href="/Examination">
            <button
              onClick={handleSignIn}
              style={buttonStyles} type="submit">Sign In</button>
          </a>
          <a href="/SignUp" style={{ fontSize: '15px' }}>You don't have an account? Sign Up here.</a>
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center', justifyContent: 'center', maxWidth: '1000px',
        flex: 1, height: '70vh', borderRadius: '15px', border: 'solid 1px white',
        backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.cAgPjRELM1X7HjZJGGZjKgHaDt&pid=Api&P=0") ', filter: 'blur(3px)',
        backgroundSize: 'cover'
      }}>
      </div>
    </div>
  );
}

export default SignIn