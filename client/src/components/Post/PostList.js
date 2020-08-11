import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/api/posts');
            setPosts(res.data)
        };
        getPosts();
    }, []);

    console.log(posts)

    return (
        <div className='container'>
            <div className='row'>
                {posts.map(post => {
                return   <div key={post.slug} className='card text-center col-md-4 my-3 mx-auto p-0'>
                                <img className='card-img-top' src={require(`../../images/temp/${post.imageUrl}`)} alt='img'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{post.title}</h4>
                                    <p className='card-text'>{post.description}</p>
                                    <Link to={`posts/${post.slug}`}>
                                        <button className='btn btn-success'>
                                            Leer mas
                                        </button>
                                    </Link>
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default PostList
