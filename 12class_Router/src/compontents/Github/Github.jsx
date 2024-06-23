import React, { useEffect } from 'react'
import { useState } from 'react';
// here the task is to show the followers when the component loads using API call using useeffect hooks

import { useLoaderData } from 'react-router-dom'; // used for loader to use here line 10


function Github() {
    // this line is at the end line 10
const data = useLoaderData()


    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Astakk123')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className=' rounded-3xl flex gap-20 m-4 bg-gray-600 text-white p-4 text-3xl mr-'>
            <img className='rounded-3xl' src={data.avatar_url} alt="no image found" />
            <p> followers:{data.followers} </p>
           
        </div>
    )
}

export default Github

// this is being done to use the loader method whic is alternative of the other where we
//  don't need to do the above api call in the function here we will do it in this line

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Astakk123')
    return response.json()
}
