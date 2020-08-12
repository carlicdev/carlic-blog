import React, { createContext, useEffect, useState,  } from 'react'
import axios from 'axios';
export const BlogContext = createContext(); 

const BlogContextProvider = (props) => {
    const [posts, setPosts ] = useState([]);
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

    return (
        <BlogContext.Provider value={{sortedPosts}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;
