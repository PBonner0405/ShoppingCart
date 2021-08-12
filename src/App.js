import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { SaatvaIcon, MultiOption } from './components';
import { fetchData } from './fetch-data';
import { cartActions, itemActions } from './redux/actions';
import { formatLongNumber, formatDigits } from './utils';
const images = require.context('../public/images', true);


const App = (props) => {

  const {items, cartItems, addCart, saveItems} = props;

  const [selectedMat, setMatSelection] = useState(0);

  useEffect(() => {
    const tmp_items = fetchData();

    saveItems(tmp_items);
  }, [saveItems])

  const onAddCart = (e) => {
    e.preventDefault();
    addCart(items[selectedMat]);
  }

  return (
    <div className="app">
      <header className="app-header">
        <p>saatva</p>
        <div>
          <SaatvaIcon name="shopping_cart" badge={cartItems.length} />
        </div>
      </header>
      <div className="app-content">
        <div className="content-col">
          {
            items && items.length > 0 && <img alt={items[selectedMat]} src={images(`./${items[selectedMat].imageFileName}`).default} />
          }
        </div>
        <div className="content-col ml-20 rmt-20">
          <p className="select-title">Choose Your Mattress</p>
          <p className="select-label">Select Mattress Type</p>
          <MultiOption options={items} activeIndex={selectedMat} handleChange={setMatSelection}/>
          {
            items && items?.length > 0 &&
            <div className="mat-info">
              <div className="info-row">
                <p>{items[selectedMat].name} Mattress</p>
                <p>${formatLongNumber(items[selectedMat].price)}</p>
              </div>
              <div className="info-row">
                <p>Review : </p>
                <p>{formatDigits(items[selectedMat].reviewRating)}</p>
              </div>
            </div>
          }
          <button className="btn-add" onClick={onAddCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
    cartItems: state.cart.items
  }
}

const actionCreators = {
  addCart: cartActions.addCart,
  saveItems: itemActions.saveItems
}

export default connect(mapStateToProps, actionCreators)(App);
