import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/blog-context'

const PostsSection = ({currentPost}) => {
    const { sortedPosts } = useContext(BlogContext);
    const filteredArr = sortedPosts.filter(post => post._id !== currentPost._id)
    const lastThreePosts = filteredArr.slice(0,3);
    return (
        <div className='container my-3 mx-auto'>
            <div className='text-left'>
                <p className='display-6'>You may be interested in...</p>
            </div>
            <div className='row'>
                {
                    lastThreePosts.map(post => {
                        return (
                            <div className='col-lg-4' key={post._id}>
                                <Link className='no-decoration' to={`${post.slug}`}>
                                    <div className='card card-section border-0 shadow text-center'>
                                        <img className='card-img-top img-section' src={require(`../../images/temp/${post.imageUrl}`)} alt='img' />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{post.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostsSection
