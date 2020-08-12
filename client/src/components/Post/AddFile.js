import React, { useState } from 'react';
import axios from 'axios';

const AddFile = () => {
    const [ file, setFile ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ content, setContent ] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
    } 

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);

        try {
            await axios.post('/api/posts/adding-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch(err) {

        }
    }

    return (
        <div className='card text-center'>
            <div className='card-header text-light'>
                <h4 className='card-title'>
                    New Post
                </h4>
            </div>
            <div className='card-body'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' type='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' value={description} name='description' onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='form-control' rows='5' type='text' value={content} name='content' onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='file' onChange={onChange}/>
                    </div>
                    <button className='btn btn-navy text-light mt-3 w-75' type='submit'>POST</button>
                </form>
            </div>
        </div>
    )
}

export default AddFile
