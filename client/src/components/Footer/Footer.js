import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='nav text-light footer p-5'>
            <div className='container-fluid text-center'>
                <p>Footer</p>
                <div className='float-right'>
                    <Link to='/login'>
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
