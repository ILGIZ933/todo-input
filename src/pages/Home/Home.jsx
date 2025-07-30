import React from 'react'
import {Link} from 'react-router-dom' 

export  const Home = () => {
  return (
    <div>
        <h1>You're welcome</h1>
        <Link to="/Login">
            <button>Enter</button>
        </Link>
        <Link to='/Todos'>
            <button>Todos</button>
        </Link>
    </div>
  )
}