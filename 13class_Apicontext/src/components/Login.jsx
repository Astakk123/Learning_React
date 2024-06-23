import React, { useContext, useState } from 'react'

import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // now we will use the usecontext hook here 

    const { setUser } = useContext(UserContext)
     
    // here the setUser is not found this is from the usercontext 


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>

            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />

            {"   "}
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login;


