import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        document.title = `You clicked ${count}`
    })
  return (
    <div>
        <p>clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}