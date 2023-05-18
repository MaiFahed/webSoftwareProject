import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import Messages from '../components/Messages'
import ResChecksBar from '../components/ResChecksBar'

const Examination = () => {
  return (
    <>
      <AdminNavBar />
      <div style={{ display: 'flex', justifyContent: 'center', height: '85vh', borderRadius: '15px', border: 'solid 1px white', width: '1000px', position: 'absolute', top: '-120px', marginLeft: '330px', backgroundColor: 'white' }}>
        {/* <div style={{ borderRadius: '15px', border: 'solid 1px white', marginLeft: '200px', marginTop: '-50px', backgroundColor: 'white', padding: '10px' }}> */}
        <ResChecksBar />
      </div>
    </>
  )
}

export default Examination