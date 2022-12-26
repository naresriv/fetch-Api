import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((resposive) => setItems(resposive.data))
            .catch((error) => setItems(error))
    }, []);

    console.log("item", items)

    return (
        <div>
            <h4>Get data by using Axios</h4>
            {items.map((info) => (
                <>
                    <p>
                        <span>{info.id}.</span>
                        {info.title}
                    </p>
                </>
            ))}
        </div>
    )
}

export default Axios
