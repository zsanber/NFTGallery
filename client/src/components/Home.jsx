import React, { useEffect, useState, useReducer } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { NavBar } from "./NavBar";
import { Terms } from "./Terms";

export const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState({});
  const [showInfo, setShowInfo] = useState(false);

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
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setPhotos(resp.data.slice(0, 200));
    } catch (err) {
      console.error(err);
    }
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
                    onClick={() => handleShowModal(item)}>
                    <img className="homePicture" src={item.thumbnailUrl} alt={item.title} />
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
            {!showInfo &&
                <motion.img
                className="movingImage img-fluid"
                src={photo.url}
                whileHover={{ scale: 1.36 }}
                whileTap={{ scale: 0.8, rotate: -180, borderRadius: "90%" }}
              />
            }

            {showInfo &&
                <div>
                    <div className="infoImage">
                        <div className="smallImage">
                            <img className="smallImageDirect img-fluid" src={photo.url}/>
                        </div>
                        <h3 className="infoImageTitle">Title: {photo.title}</h3>
                        <h5 className="infoImageUrl">Url: {photo.url}</h5>
                    </div>
                </div>
            }
            <div className="container">
              <div className="row justify-content-center">
              <button className="row col-12 btn btn-info rounded mt-2 mb-1 fs-5 fw-bold text-white"
                    onClick={() => setShowInfo(!showInfo)}>
                    Information about the image
                </button>
              </div>
              <div className="row justify-content-center">
                <button className="col-9 btn btn-success rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  Edit
                </button>
                <button className="col-3 btn btn-danger rounded mt-1 mb-1 fs-5 fw-bold text-white">
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
