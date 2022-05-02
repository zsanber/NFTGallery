import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Terms } from "./Terms";

export const Welcome = ({}) => {
  const [message, setMessage] = useState("");

  const params = useParams();
  console.log("kliens:", params.confirmationCode);
  const url = "authRoute/confirm/";
  useEffect(() => {
    verifyUser(url, params.confirmationCode);
  }, []);

  const verifyUser = async (url, code) => {
    try {
      const resp = await axios.get(url + code);
      const data = await resp.data;
      setMessage(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="reg">
      <div className="row justify-content-center mx-auto col-12">
        <div className="col-12">
          <div className="box col-sm-12 position-absolute top-50 start-50 translate-middle">
            <div className="jumbotron">
              <h3>{message} </h3>
              <NavLink to={"/"}>Please log in...</NavLink>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
          <Terms />
        </div>
      </div>
    </div>
  );
};
