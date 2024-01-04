import React, { useState } from 'react'

const EventHandler = () => {
    let red = '#23586e'
    const [name , setName] = useState('IRFAN')
    const [color , setColor] = useState(red)

    const changeBg =()=>{
        setName('RIZWAN')
        setColor('#56803e')
    }
 const dbleClick =()=>{
    setName('ASAD')
    setColor('#56631e')
 }
  return (  
    <>
      <div style={{ backgroundColor: color , height:'100%'}} >I AM {name}</div>
    <button onDoubleClick={dbleClick} onClick={changeBg}>Click</button>
    </>
  )
}

export default EventHandler
