
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
import kfcimage from '../src/Images/kfcimg2.jpg';
import Cart from '../src/Components/Cart';
import { useNavigate } from 'react-router-dom';

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
    id: 2,
    header: 'Krunch Burger2',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 3,
    header: 'Krunch Burger3',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 4,
    header: 'Krunch Burger4',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 5,
    header: 'Krunch Burger1',
    details: 'Krunch Burger is very popular nowadays',
    price: 67.98,
    items: 1,
    image: kfcimage,
  },
  {
    id: 6,
    header: 'Krunch Burger2',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 7,
    header: 'Krunch Burger3',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 8,
    header: 'Krunch Burger4',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  {
    id: 9,
    header: 'Krunch Burger4',
    details: 'Krunch Burger2 is very popular nowadays',
    price: 100,
    items: 1,
    image: kfcimage,
  },
  
];


const ProductList = ({ burgers, handleAddToCart }) => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container">
      <div className="row">
        {burgers.map((burger, index) => (
          <div className='col-md-3' key={index}>
            <div className='card'>
              <div>
                <img className='card-img-top' src={burger.image} alt='Card cap' />
                <div className='card-body'>
                  <h3 className='card-title'>{burger.header}</h3>
                  <h4 className='card-text'>{burger.price} Rs</h4>
                </div>
              </div>
              <button className='btn btn-outline-primary m-3' onClick={() => handleAddToCart(index)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <button className='btn btn-success' onClick={navigateToCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};


const CheckoutPage = ({ selectedBurgers, removeItem, addItem, lessItem, totalItems, totalPrice }) => {
  return (
    <div className="container">
      <div className="row">
        {selectedBurgers.map((selected, index) => (
          <div key={index} className='col-md-3'>
            <div className='card'>
              <div>
                <h6>{selected.header}</h6>
                <p>Price: {selected.price.toFixed(2)} Rs</p>
                <p>Items: {selected.items} </p>
              </div>
              <div>
                <img src={selected.image} alt={'Img Not Found'} className="img-thumbnail" style={{ maxWidth: '50px' }} />
                <div>
                  {selected.items >= 1 ?
                    <button className="btn btn-primary ml-2" onClick={() => lessItem(selected)}>-</button>
                    :
                    <button className="btn btn-danger ml-2" onClick={() => removeItem(selected.id, selected.header + '_' + index)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  }
                  <span id='spanText'>{selected.items}</span>
                  <button className="btn btn-primary ml-2" onClick={() => addItem(selected, index)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {/* Your pagination */}
      </div>
      <div className="row">
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
                        <p>Price: {selected.price.toFixed(2)} Rs</p>
                        <p>Items: {selected.items} </p>
                      </div>
                      <div>
                        <img src={selected.image} alt={'Img Not Found'} className="img-thumbnail" style={{ maxWidth: '50px' }} />
                        <div>
                          {selected.items >= 1 ?
                            <button className="btn btn-primary ml-2" onClick={() => lessItem(selected)}>-</button>
                            :
                            <button className="btn btn-danger ml-2" onClick={() => removeItem(selected.id, selected.header + '_' + index)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          }
                          <span id='spanText'>{selected.items}</span>
                          <button className="btn btn-primary ml-2" onClick={() => addItem(selected, index)}>
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
  );
};

const App = () => {
  const [burgers, setBurgers] = useState(BURGERS);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedBurgers, setSelectedBurgers] = useState([]);
  const [selectedTotalItems, setSelectedTotalItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddToCart = (index) => {
    const newBurgers = [...burgers];
    const selectedBurger = newBurgers[index];
    setTotalPrice((prevTotalPrice) => prevTotalPrice + selectedBurger.price);
    setTotalItems((prevTotalItems) => prevTotalItems + selectedBurger.items);
    setSelectedBurgers([...selectedBurgers, selectedBurger]);
    setBurgers(newBurgers);
  };

  const removeItem = (id, name) => {
    if (id > 0) {
      const updatedSelectedBurgers = selectedBurgers.filter((item, i) => item.header + '_' + i !== name);
      const updatedTotalItems = updatedSelectedBurgers.reduce((total, item) => total + item.items, 0);
      const updatedTotalPrice = updatedSelectedBurgers.reduce((total, item) => total + item.price, 0);

      setTotalItems(updatedTotalItems);
      setTotalPrice(updatedTotalPrice);
      setSelectedBurgers(updatedSelectedBurgers);
    }
  };

  const addItem = (selected, index) => {
    setSelectedTotalItems((prevSelectedTotalItems) => prevSelectedTotalItems + selected.items);
  };

  const lessItem = (selected) => {
    setSelectedTotalItems((prevSelectedTotalItems) => prevSelectedTotalItems - selected.items);
  };
// const navigate = useNavigate();

   const navigateToCart = () => {
  //    navigate('/cart');
   };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to='/cart'>
                <button className='btn btn-success' onClick={navigateToCart}>Go to Cart {totalItems}</button>
              </Link>
              <ProductList burgers={burgers} handleAddToCart={handleAddToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          }
        />
        <Route
    path="/checkout"
    element={
      <CheckoutPage
        selectedBurgers={selectedBurgers}
        removeItem={removeItem}
        addItem={addItem}
        lessItem={lessItem}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    }
  />
      </Routes>
    </Router>
  );
};

export default App;



