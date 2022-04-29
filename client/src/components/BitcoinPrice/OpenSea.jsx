import React, { useState, useEffect } from "react";
import "./BitcoinPrice.css";

export const OpenSea = () => {
  return (
    <div className="btc">
      <img className="btc-logo" src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea" />
      <span className="btc-price"><a className="opensea" href="https://opensea.io/" target="blank">OpenSea</a></span> 
    </div>
  );
};

export default OpenSea;