import React from 'react'

const SelectedMsg = ({name, brief, message, date}) => {
    return (
        <div className='msgContainer'>
            <div className='msgHeader'>
                <div className='praghHead'>
                    <p id='pHeader'>{name}</p>
                    <p id='pHeader'> <span>{brief}</span> </p>
                </div>
                <div className='icon'>
                    {/* <p><FiTrash2 color='black' size={25} /></p> */}
                    <span>{date}</span>
                </div>
            </div>

            <div className='msgFooter'>
                {message}
            </div>
        </div>
    );
}

export default SelectedMsg