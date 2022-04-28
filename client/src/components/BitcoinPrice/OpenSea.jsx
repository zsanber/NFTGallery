import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap"

export const OpenSea = () => {
  return (
    <div className="btc">
      <img className="btc-logo" src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea" />
      <Button variant="link" href="https://opensea.io/" target="blank">Opensea</Button>
    </div>
  );
};

export default OpenSea;