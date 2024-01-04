import React, { useContext } from 'react'
import ChildC from './ChildC'
import {data , data1} from './ContextApi'

const ChildB = () => {
  const name = useContext()
  return (
    <div>
      <h2> my name is {name}</h2>
    </div>
  )
}

export default ChildB
