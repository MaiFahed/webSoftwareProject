import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, height: '500px', }}>
          <div style={{ marginBottom: '65px', fontWeight: 'bold', fontSize: '40px' }}>LET'S FIGHT <span style={{ color: 'yellow', fontSize: '40px' }}>waste</span> TOGETHER</div>
          <div style={{ textAlign: 'center' }}>
            <p>Food waste is a problem, and we are one of the solutions.</p>
            <p>Go4Food is the application that allows you to save the unsold food </p>
            <p>of your favorite brands from a sad fate.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center', justifyContent: 'center', maxWidth: '450px',
          flex: 1, height: '530px', borderRadius: '15px', border: 'solid 1px white',
          backgroundImage: 'url("http://www.freecoupons.com/wp-content/uploads/2009/12/grocery-bag.jpg") ',
          backgroundSize: 'cover'
        }}>
        </div>
      </div>
    </>
  );
}

export default Home