import React, { useEffect, useState } from 'react'

const ApiIntegrations = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // console.log(res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
  }, [])

  console.log("data", data)

  return (
    <div>
      <h2>Hello users</h2>
      {data.map((item) => (
        <>
          <h4>{item.name}</h4>
          <p>{item.username}</p>
          <h6>{item.company?.name}</h6>
        </>
      ))}
    </div>
  )
}

export default ApiIntegrations
