import React from 'react'

// here we get the value of the personal like when we do the user then in one and 10
// it give the same result  the task is how to then pickup value
import { useParams } from 'react-router-dom'

function User() {
    const {Userid} = useParams() //now if i write user/100 then i would get 100 in my page 
    return (
        <div className='bg-gray-600 py-10 pb-30 rounded-3xl '>
       <h1 className=' text-4xl text-white font-bold rounded-3xl py-10' >USer:{Userid}</h1>

<img src="" alt="" />
       <h2 className="text-4xl font-bold text-white sm:text-5xl pb-40   ">
       Followers:
   
   </h2>
   </div>
    )
}

export default User

