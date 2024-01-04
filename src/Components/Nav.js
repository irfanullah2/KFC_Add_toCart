import React from 'react'
import Kfc from './Kfc'


const Nav = (props) => {
  return (
    <>
   
   <nav  >
 <div style={{display:'flex'}}>
 <h4>Total Price :{totalPrice} || Total Items :{totalItems}  </h4> &nbsp;
 <h4>Selected Products: {selectedProducts.join(' ')}</h4>
 </div> 
</nav>
      
    </>
  )
}

export default Nav
