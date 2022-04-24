import React, { useEffect, useState, useReducer } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Sidebar } from "./Sidebar/Sidebar";
import { NavBar } from "./NavBar/NavBar";
import { Terms } from "./Terms";
import { confirm } from "react-confirm-box";
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate()

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (item) => {
    setPhoto(item);
    setShowModal(true);
    setShowInfo(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    let url = "http://localhost:5000/photos/";
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      setPhotos(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

//confirm box for a delete photo
const options = {
  labels: {
    confirmable: "Yes, I confirm",
    cancellable: "Cancel"
  }
}

const onClickDeletePicture = async () => {
   const result = await confirm("Are you sure that you want to delete the picture?", options);
   let url = "http://localhost:5000//:id/:imageId";
   if (result) {
     console.log("You click yes!");
      try {
        const resp = await axios.delete(url);
      } catch (err) {
        console.error(err);
      }
     return;
   }
   console.log("You click No!");
 };


  return (
    <>
      <div className="homeBackground">
        <NavBar />
        <div className="container">
          <div className="row justify-content-center">
            <Sidebar />
            <div className="homeBox col-12 col-md-8 mt-5 order-1">
              <div className="homeBoxContent">
                {photos.map((item, i) => (
                  <div
                    key={i}
                    className="homePictures d-flex d-inline-flex p-2"
                    onClick={() => handleShowModal(item)}
                    whileHover={{opacity: 1}}
                  >
                    <img
                      className="homePicture"
                      src={item.link}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="homePictureTitle">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
            <Terms />
          </div>
        </div>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="false"
          centered
        >
          <Modal.Body className="text-center">
            {!showInfo && (
              <motion.img
                className="movingImage img-fluid"
                src={photo.link}
                whileHover={{ scale: 1.36 }}
                whileTap={{ scale: 0.8, rotate: -180, borderRadius: "90%" }}
              />
            )}

            {showInfo && (
              <div className="infoImageContainer">
                <div className="infoImage">
                  <div className="smallImage">
                    <img
                      className="smallImageDirect img-fluid"
                      src={photo.link}
                    />
                  </div>
                  <h4 className="infoImageTitle">Title: {photo.title}</h4>
                  <h5 className="">Description: {photo.description}</h5>
                  
                </div>
              </div>
            )}
            <div className="container">
              <div className="row justify-content-center">
                <button
                  className="row col-12 btn btn-info rounded mt-2 mb-1 fs-5 fw-bold text-white"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  Information about the image
                </button>
              </div>
              <div className="row justify-content-center">
                <button onClick={() => navigate('/edit/' + photo.id)} className="col-9 btn btn-success rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  Update
                </button>
                <button onClick={onClickDeletePicture} className="col-3 btn btn-danger rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  Delete
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};