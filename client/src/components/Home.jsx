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
            <div className="homeBox col-12 col-md-8 mb- mt-5 order-1">
              <div className="homeBoxContent">
                {photos.map((item, i) => (
                  <div
                    key={i}
                    className="homePictures d-flex d-inline-flex p-2"
                    onClick={() => handleShowModal(item)}
                  >
                    <img src={item.thumbnailUrl} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Terms />
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
                whileHover={{ scale: 1.03 }}
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
            
            <button className="col-3 btn btn-info form-control rounded mt-2 mb-1 fs-5 fw-bold text-white"
                    onClick={() => setShowInfo(!showInfo)}>
              Information about the image
            </button>

            <button className="col-1 btn btn-danger form-control rounded mt-2 mb-1 fs-5 fw-bold text-white">
              Delete
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
