import React, { useState } from 'react'
import kfcimage from '../Images/kfcimg4.jpg'


const BURGERS = [
    {
      id: 1,
      header: 'Krunch Burger1',
      details: 'Krunch Burger is very popular nowadays',
      price: 67.98,
      items: 1,
      image: kfcimage,
    },
    {
      id: 3,
      header: 'Krunch Burger2',
      details: 'Krunch Burger is very popular nowadays',
      price: 673,
      items: 1,
      image: kfcimage,
    },
    {
      id: 4,
      header: 'Krunch Burger3',
      details: 'Krunch Burger is very popular nowadays',
      price: 98.54,
      items: 1,
      image: kfcimage,
    },
    {
      id: 4,
      header: 'Krunch Burger4',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 5,
      header: 'Krunch Burger5',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 6,
      header: 'Krunch Burger6',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 7,
      header: 'Krunch Burger7',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 8,
      header: 'Krunch Burger8',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 9,
      header: 'Krunch Burger9',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
    {
      id: 10,
      header: 'Krunch Burger10',
      details: 'Krunch Burger is very popular nowadays',
      price: 300,
      items: 1,
      image: kfcimage,
    },
   
  ];

  const SideBar = (props) => {
    const [product , setProduct] = useState(BURGERS);
 
  
  return (
    <>
        
    </>
  )
}

export default SideBar
