import React, { useState } from 'react'
import kfcimage from '../Images/kfcimg4.jpg'
import {Link ,useNavigate, BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from './Cart';
import SideBar from './SideBar';

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

  const KFC2 = () => {
    //States
    const navigate = useNavigate();
    const [burgers, setBurgers] = useState(BURGERS);
    const [totalPrice , setTotalPrice] = useState(0)
    const [totalItems , setTotalItems] = useState(0)
    const [selectedBurgers  , setSelectedBurgers] = useState([]);
    const [data , setData] = useState([])
    const [selectedtotalItems , setSelectedTotalItems] = useState(1)
    

    
    //Pagination 
    const [currPage , setCurrPage] = useState(1);
    let itemsPerPage = 3
    const startIndex = (currPage-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const totalPages = Math.ceil(BURGERS.length/itemsPerPage)
    const slicedBurgers = burgers.slice(startIndex , endIndex)
    // console.log ( slicedBurgers)

const pages = [];
for(let i=1 ; i<=totalPages ; i++){
    pages.push(i)
}
//Add to cart Functions
const handleAddtoCart = (index)=>{
const newBurgers = [...burgers];
newBurgers[index] = {
     ...newBurgers[index],  }
   const newprice =  totalPrice + BURGERS[index].price;
   const newItems = totalItems + BURGERS[index].items;  
   const selectedBurger = slicedBurgers[index];

   setTotalPrice(newprice)
   setTotalItems(newItems)
   setSelectedBurgers(()=>[...selectedBurgers , selectedBurger])
   setBurgers(newBurgers)

   const allData = [setTotalItems , setTotalPrice , selectedBurgers]
   console.log(allData)
    
  //  return allData 
   return newBurgers  
    // navigate('/cart', { state: { totalItems, totalPrice } }); 
  }

    const removeItem = (id, name) => {
      if (id > 0) {
        const updatedSelectedBurgers = selectedBurgers.filter((item, i) => item.header + '_'+i !== name);
          console.log(name)
        const updatedTotalItems = updatedSelectedBurgers.reduce((total, item) => total + item.items, 0);
        const updatedTotalPrice = updatedSelectedBurgers.reduce((total, item) => total + item.price, 0);
    
        setTotalItems(updatedTotalItems);
        setTotalPrice(updatedTotalPrice);
        setSelectedBurgers(updatedSelectedBurgers);
      
      
      }
    };
    const addItem = (selected , index)=>{
      console.log(selected)
    setSelectedTotalItems(()=>selectedtotalItems+selected.items)

    }

    const lessItem =(selected)=>{
      console.log(selected)
      setSelectedTotalItems(()=>selectedtotalItems-selected.items)
    }

    const cartC = () => {
      navigate('/cart', { state: { totalItems, totalPrice } });
    };
    
    return (
        <>  

<Link to='/cart' >
  <button className='btn btn-success' onClick={cartC}>Go to Cart{totalItems}</button>
</Link>

<Cart totalItems={totalItems} totalPrice={totalPrice} />


 <div className="container">
  <div className="row">
   
    <div className="col-md-8">
      <div className="row">
        {slicedBurgers.map((b, index) => (
         <div className='col-md-3' key={index}>
          <div className='card'>
            <div>
              <img className='card-img-top' src={kfcimage} alt='Card cap' />
              <div className='card-body'>
                <h3 className='card-title'>{b.header}</h3>
                <h4 className='card-text'>{b.price} Rs</h4>
              </div>
            </div>
            <button className='btn btn-outline-primary m-3' onClick={() => handleAddtoCart(index)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
     </div>
    </div>
   
  
 
    <div className="col-md-4">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Selected Burgers:</h4>
      <ul className="list-group">
        {selectedBurgers.map((selected, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>{selected.header}</h6>
                {/* <p>{selected.details}</p> */}
                <p>Price: {selected.price.toFixed(2)} Rs</p>
                <p>Items: {selected.items} </p>
              </div>
          <div>
                <img src={selected.image} alt={'Img Not Found'} className="img-thumbnail" style={{ maxWidth: '50px' }} />

                  <div>
               
               {selectedtotalItems>=1 ?
                
                <button className="btn btn-primary ml-2" onClick={()=>lessItem(selected)} >-</button>
               :
          <button className="btn btn-danger ml-2" onClick={() => removeItem(selected.id, selected.header + '_' + index)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button> 
                }
              
                <span id='spanText'>{selectedtotalItems}</span>
                <button className="btn btn-primary ml-2" 
                onClick={()=>addItem(selected , index)} >
                <i className="fa-solid fa-plus"></i>
                </button>
               </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <h6>Total Price: {totalPrice.toFixed(0)} Rs</h6>
        <h6>Total Items: {totalItems}</h6>
      </div>
    </div>
  </div>
</div>


 </div>
 </div>

 
 
 
 
  <footer>
   {
    totalPages >1 && 
    <div>
    <button className='btn btn-outline-dark m-2' 
    onClick={()=>setCurrPage(currPage-1)}
     disabled = {currPage<=1}
    >Previos</button>

{
        pages.map((p , index)=>(
          <button className='btn btn-outline-primary' key={index} onClick={(s)=>setCurrPage(s=p)}>{p}</button>
        ))
      }

    <button className='btn btn-outline-primary m-2'
    onClick={()=>setCurrPage(currPage+1)}
    disabled = {currPage>=totalPages}
    >Next</button>
    </div>
   }
</footer>

        </>
      );
    };
    
    export default KFC2;