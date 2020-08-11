import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

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
                    <div className='container text-center mx-auto bg-light py-5'>
                        <div className='image-container mx-auto mt-5'>
                            <img src={require(`../../images/temp/${post.imageUrl}`)} className='img-fluid'/>
                        </div>
                        <div className='container'>
                            <h1>{post.title}</h1>
                            <ReactMarkdown className='container text-justify' source={post.content} />
                        </div>
                    </div>
                )
            }
        </div>
        
    )
}

export default PostDetail
