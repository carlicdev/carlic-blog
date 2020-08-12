import React, { useState } from 'react'
import axios from 'axios';
import MyPill from '../About/MyPill';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serverMsg, setServerMsg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await  axios.post('/api/contact/message', {
                name, 
                email, 
                message
            });
        setServerMsg(res.data.msg);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='container my-5 h-100'>
            <MyPill />
            <div className='row shadow'>
                <div className='col-lg-6 p-0'>
                    <div className='container-fluid h-100 text-light text-center btn-navy p-5'>
                        <div className='container my-5'>
                        <h4>Send me a message</h4>
                        <hr/>
                        <p>If you have any comments or suggestions about the blog I would love to read them.</p>
                        <p>If you want to chat about programming or technology I´m all for it.</p>
                        <p>Or maybe you have an exciting project. I would love to be part of your team.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 p-0'>
                    <div className='container p-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group my-2'>
                                <label htmlFor='name'>Your <span className='text-muted'>Name</span></label>
                                <input type='text' className='form-control' name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group my-2'>
                                <label htmlFor='email'>Your <span className='text-muted'>Email</span></label>
                                <input type='email' className='form-control' name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-group my-2'>
                                <label htmlFor='name'>Your <span className='text-muted'>Message</span></label>
                                <textarea rows='5' className='form-control' name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            {
                                serverMsg && (
                                    <div className='container'>
                                        <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                                            CarliC has received your message!
                                            <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
                                                <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='form-group text-right mt-3'>
                                <button className='btn btn-navy px-3 text-light' type='submit'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
