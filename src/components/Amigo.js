import React from 'react'
import { useNavigate } from 'react-router-dom';

function Amigo() {
    let navigate=useNavigate()
    let navigatetohOME=()=>
    {
        navigate('/')
    }
  return (
    <div>
        <h1>Hello Welcome</h1>
        <button onClick={navigatetohOME}>Logout</button>
    </div>
  )
}

export default Amigo