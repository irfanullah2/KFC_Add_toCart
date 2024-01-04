// import React from 'react'

// const Cart = ({ selectedBurgers, totalItems, totalPrice }) => {
//   return (
//     <>  
//   <div>
//       <h3>Your Cart</h3>
//       <ul>
//         {selectedBurgers.map((selected, index) => (
//           <li key={index}>
//             {selected.header} - {selected.items} items
//           </li>
//         ))}
//       </ul>
//       <p>Total Items: {totalItems}</p>
//       <p>Total Price: {totalPrice.toFixed(2)} Rs</p>
//     </div>
      
//     </>
//   )
// }

// export default Cart



import React from 'react';

const Cart = (props) => {
  // const{ state} = props.location;
  const { totalItems, totalPrice} = props;

  console.log(props)
  return (
    <div>
      <h2>Cart Details</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      {/* <p>Selected Burgers: {selectedBurgers}</p> */}
      {/* <p>this is :{hd}</p> */}
     
    </div>
  );
};

export default Cart;

