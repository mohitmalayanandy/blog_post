import React, { useState, useEffect } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error))
    }, [])


    return (
        <div>
            <h1 className="text-center text-3xl font-semibold m-2">Welcome To My Blog Post</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="p-6 bg-white text-black rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className='text-black text-lg'>{post.content}</p>
                        <p className='text-blue-400'><span className='text-green-700'>Author:</span> {post.author}</p>
                        <p className='text-yellow-400'><span className='text-green-700'>Posted On:</span> {post.date}</p>
                        <input type="text" placeholder='Comment Here' className='text-sm text-gray-400 bg-blue-100 rounded-lg p-1 outline-none' />
                        <p className='text-red-400'>{post.likes}</p>
                        <p className='text-orange-700 text-sm'>{post.comments.map((com) => (
                            <div key={com.id} className='flex'>
                                <p>{com.content}</p>
                                <button className="border rounded-full bg-red-100 mx-5">
                                    like
                                </button>
                            </div>
                        ))}</p>
                        <button className='w-20 bg-green-500 text-white p-1 rounded m-1'>
                            Edit
                        </button>
                        <button className='w-20 bg-red-500 text-white p-1 rounded m-1'>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts