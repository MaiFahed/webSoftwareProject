import React from 'react'
import NavBar from '../components/NavBar'
import DonateBar from '../components/DonateBar'

const Donate = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', height: '85vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-120px', marginLeft: '330px', backgroundColor: 'white' }}>
                <DonateBar />
            </div>
        </>
    )
}

export default Donate