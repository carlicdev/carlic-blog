import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddFile from '../Post/AddFile'

const Login = () => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('Use effect: ' + user)
        const getUser = async () => {
            const res = await axios.get('/api/user/user');
            console.log(res);
            if(res.data.user) {
                setUser(res.data.user.username)
            } else {
                setUser(null);
            }
        }
        getUser();
    },[user, logged])

    const handleSubmit = (e) => {
        e.preventDefault();
         axios.post('/api/user/login', {
                        username,
                        password
                    })
                    .then(result => {
                        if (result.status === 200) {
                            setLogged(true);
                        } else {
                            setLogged(false);
                        }
                    })
                    .catch(err => console.log(err))
    } 
    
    if(!user) {
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-header text-light text-center'>
                        <h4 className='card-title'>Login</h4>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input type='text' className='form-control' name='username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' className='form-control' name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='form-group text-center mt-2'>
                                <button className='btn btn-navy text-white px-4' type='submit'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className='container'>
                <AddFile />
            </div>
        )
    }
}

export default Login
