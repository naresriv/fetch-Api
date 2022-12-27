import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosGet1 = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const getCustomers = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setCustomers(result.data)
        }
        getCustomers()
    }, [])


    return (
        <div>
            <h4> To Get data from API by decaring a variable to its</h4>
            {customers.map((info) => (
                <>
                    <p>
                        <span>{info.id}.</span>
                        {info.email}
                    </p>
                    <p>{info.body}</p>
                </>
            ))}
        </div>
    )
}

export default AxiosGet1
