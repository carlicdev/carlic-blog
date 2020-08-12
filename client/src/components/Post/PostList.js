import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment'
import { Link } from 'react-router-dom';

const PostList = () => {
    const [ posts, setPosts ] = useState([]);
    const sortedPosts = posts.sort((a,b) => {
        let postA = a.createdAt.substring(0, 10).split('-').join('');
        let postB = b.createdAt.substring(0, 10).split('-').join('');
        return postB - postA;
    });

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/api/posts');
            setPosts(res.data)
        };
        getPosts();
    }, []);

    console.log(posts)

    return (
        <div className='container my-5'>
            <div className='row'>
                {sortedPosts.map(post => {
                return   <div key={post.slug} className='card shadow text-center border-0 bg-light col-md-4 my-3 mx-auto p-0'>
                                <img className='card-img-top' src={require(`../../images/temp/${post.imageUrl}`)} alt='img'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{post.title}</h4>
                                    <small className='text-muted'>
                                            <Moment format='DD/MM/YYYY' >
                                                {post.createdAt}
                                            </Moment>
                                        </small>
                                    <p className='card-text'>{post.description}</p>
                                    <Link to={`posts/${post.slug}`}>
                                        <button className='btn btn-navy shadow-sm text-light'>
                                            Read more
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
