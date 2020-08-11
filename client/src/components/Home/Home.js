import React from 'react'
import PostList from '../Post/PostList'
import MyPill from '../About/MyPill'

const Home = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <MyPill />
            </div>
            <PostList />
        </div>
    )
}

export default Home
