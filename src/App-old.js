// import React from 'react';
// import Kfc from './Components/Kfc';
// import KFC2 from './Components/KFC2';



// const App = () => {
//   return (
   
    
//     <KFC2 />
//     //  <Kfc />
      
//   );
// }

// export default App;


import React from 'react'
import {BrowserRouter , Routes , Route  } from 'react-router-dom'
import KFC2 from './Components/KFC2'
import Cart from './Components/Cart'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<KFC2/>} />
       <Route path='/cart' element={<Cart />} />
     </Routes>
      
    </BrowserRouter>
  )
}

export default App

