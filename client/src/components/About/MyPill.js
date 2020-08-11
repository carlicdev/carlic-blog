import React from 'react'

const MyPill = () => {
    return (
        <div className='container'>
        <div className='rounded-pill my-pill mx-auto px-3 py-4 my-5'>
            <div className='row'>
                <div className='col-5'>
                    <div className='rounded-circle bg-white mt-4 ml-3'>
                        <img src={require('../../images/cover/cartoon.png')} alt='img' className='rounded-circle'/>
                    </div>
                </div>
                <div className='col-7'>
                    <h2>Hi, I´m CarliC!</h2>
                    <h6><small>Full-stack Web developer</small></h6>
                    <p>I write about everything involving Javascript, Web development and freelance</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyPill
