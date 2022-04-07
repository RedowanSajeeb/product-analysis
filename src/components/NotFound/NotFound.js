import React from 'react';
import NotFoundPicture from '../../Images/404NotFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-full' src={NotFoundPicture} alt="" />
        </div>
    );
};

export default NotFound;