import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetail = ({match}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const slug = match.params.slug;
        const getPost = async () => {
            const res = await axios.get(`/api/posts/${slug}`)
            setPost(res.data);
        };
        getPost();
    }, []);

    console.log(post)
    return (
        <div>
            {
                post === null && (
                    <div>Loading</div>
                )
            }
            {
                post && (
                    <div className='card'>
                    <h1>{post.title}</h1>
                    </div>
                )
            }
        </div>
        
    )
}

export default PostDetail
