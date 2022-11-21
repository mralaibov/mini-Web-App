import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBlockChain,
  selectBitcoin,
} from '../src/features/counter/counterSlice';

function App() {
  const bitcoin = useSelector(selectBitcoin);
  
  const dispatch = useDispatch();

  const getBitcoin = () => dispatch(fetchBlockChain())

  useEffect(() => {
    const interval = setInterval(() => getBitcoin(), 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("bitcoin", bitcoin);

  return (
    <div className="App">
      {Object.entries(bitcoin).map(([key, { rate_float }]) => (
        <p key={key}>
          {key}: {rate_float}
        </p>
      ))}
    </div>
  );
}

export default App;
