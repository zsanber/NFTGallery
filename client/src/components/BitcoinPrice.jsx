import React, { useState, useEffect } from "react";
import logo from "./bitcoin-logo.png";
import "./BitcoinPrice.css";

export const BitcoinPrice = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://blockchain.info/ticker")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setPrice(data.USD.last); 
            setLoading(false);       
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      return (
        <div className="btc">
          <img className="btc-logo" src={logo} alt="Bitcoin" />
          <span className="btc-price">
            {loading ? "LOADING" : "$" + price}
          </span>      
        </div>
      );
  };
  
  export default BitcoinPrice;