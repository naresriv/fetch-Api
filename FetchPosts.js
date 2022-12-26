import React, { useEffect, useState } from 'react'

const FectApi = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => setPosts(json))
            .catch((err) => setPosts(err))
    }, [])
    console.log("post", posts)
    return (
        <div>
            <div>
                {posts.map((item) => (
                    <div>
                        <h4>
                            <span>
                                {item.id}.
                            </span>
                            {item.title}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FectApi
