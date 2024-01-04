import React , {createContext} from 'react'
import ChildA from './ChildA'
import ChildC from './ChildC';
import ChildB from './ChildB';

const data = createContext();
const data1 = createContext();
const ContextApi = () => {
  const name = 'IRFAN'
  const clas = 'BSCS'
  return (
<data.Provider  value= {name}>
  <data1.Provider value={clas}>
      <ChildB />
  </data1.Provider>
</data.Provider>

  )
}

export default ContextApi
export {data , data1};
