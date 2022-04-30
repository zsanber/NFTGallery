import React, { useState, useEffect } from "react";
import "./BitcoinPrice.css";
import { NavLink } from "react-router-dom";

export const OpenSea = () => {
  return (
    <div className="btc">
      <img className="btc-logo" src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea" />
      <span className="btc-price"><NavLink className="opensea" to="https://opensea.io/" href="#" target="blank">OpenSea</NavLink></span> 
    </div>
  );
};

export default OpenSea;