import React, { useState } from 'react';
import kfcimage from '../Images/kfcpic.jpg';
import {Link} from 'react-router-dom'

const Products = [
  {
    id: 1,
    header: 'Krunch Burger1',
    details: 'Krunch Burger is very popular nowadays',
    price: 300,
    items: 1,
    image: kfcimage,
  },
  {
    id: 3,
    header: 'Krunch Burger2',
    details: 'Krunch Burger is very popular nowadays',
    price: 300,
    items: 1,
    image: kfcimage,
  },
  {
    id: 4,
    header: 'Krunch Burger3',
    details: 'Krunch Burger is very popular nowadays',
    price: 300,
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

const Kfc = () => {
  const [burger, setBurger] = useState(Products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currPage , setCurPage] = useState(1)
  let itemsPerPage = 4
 
const startIndex = (currPage-1) * itemsPerPage
const endIndex = startIndex + itemsPerPage

const slicedBurger = burger.slice(startIndex , endIndex)
const totalPages = Math.ceil(burger.length/itemsPerPage)
const pageCounter = [];
for(let i =1 ; i<=totalPages ; i++){
  pageCounter.push(i)
}

  const handleAdd = (index) => {
   
    setBurger(() => {
      const newBurger = [...burger];
      newBurger[index] = { ...newBurger[index] };
      const newTotalPrice = totalPrice + Products[index].price;
      const newTotalItems = totalItems + Products[index].items;
      const selectedProduct = slicedBurger[index].header;
         
      setTotalPrice(newTotalPrice);
      setTotalItems(newTotalItems);
      setSelectedProducts(() => [...selectedProducts, selectedProduct]);
      return newBurger;
    });
  };

  return (
    <>
 
 <header>
 <div>
      <h4>Total Price: {totalPrice}</h4>
      <h4>Total Items: {totalItems}</h4>
      <h5>Selected Products: {selectedProducts.join(', ')}</h5>
    </div>
 </header>
   
      <div className="row">
        {slicedBurger.map((b, index) => (
          <div className="col-3" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={kfcimage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{b.header}</h5>
                <p className="card-text">{b.details}</p>
                <h2>{b.price} Rs</h2>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleAdd(index)}
                >
                  Add to Bucket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    
     { totalPages>0 &&
     
      <div>
      <button className='btn btn-outline-primary' onClick={()=>setCurPage(currPage-1)} disabled={currPage<=1}>Previos</button>
      {
        pageCounter.map((p , index)=>(
          <button className='btn btn-outline-primary' key={index} onClick={(s)=>setCurPage(s=p)}>{p}</button>
        ))
      }
       <button className='btn btn-outline-primary' onClick={()=>setCurPage(currPage+1)} disabled ={currPage>=totalPages}>Next</button>
      </div>

     }

    </>
  );
};


export default Kfc;
