import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import PostsSection from './PostsSection';

const PostDetail = ({match}) => {
    const [post, setPost] = useState(null);
    const [newSlug, setNewSlug] = useState('');

    useEffect(() => {
        window.scrollTo(0,0);
    },[post])

    useEffect(() => {
        const slug = match.params.slug;
        const getPost = async () => {
            const res = await axios.get(`/api/posts/${slug}`)
            setPost(res.data);
        };
        getPost();
    }, [newSlug]);

    useEffect(() => {
        const getSlug = () => {
            setNewSlug(match.params.slug)
        }
       getSlug();
    });

    return (
        <div>
            {
                post === null && (
                    <div>Loading</div>
                )
            }
            {
                post && (
                    <div className='container text-center mx-auto  py-5'>
                        <h1 className='display-3'>{post.title}</h1>
                        <div className='image-container mx-auto my-5'>
                            <img src={require(`../../images/temp/${post.imageUrl}`)} className='img-fluid post-img'/>
                        </div>
                        <div className='container'>
                            <ReactMarkdown className='container text-left' source={post.content} />
                        </div>
                            <Link to='/'>
                                <button className='btn btn-danger shadow-sm'>
                                        Index
                                </button>
                            </Link>
                            <hr/>
                            <PostsSection currentPost={post}/>
                    </div>
                )
            }
        </div>
        
    )
}

export default PostDetail
