import React, { useEffect, useState, useReducer } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Sidebar } from "./Sidebar/Sidebar";
import { NavBar } from "./NavBar/NavBar";
import { Terms } from "./Terms";

export const Home = ({ categoryList, setCategory, selectedCategory, setSelectedCategory, userName, userId }) => {
  const [photo, setPhoto] = useState({});
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);  
  const [showInfo, setShowInfo] = useState(false);
  const [photosFiltered, setPhotosFiltered] = useState(photos)

 

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (item) => {
    setPhoto(item);
    setShowModal(true);
    setShowInfo(false);
  };

  useEffect(() =>{
    setPhotosFiltered(photos);
  },[photos])

  useEffect(() => {
    fetchPhotos(selectedCategory);    
  }, [selectedCategory]);

  const fetchPhotos = async (selectedCategory) => {
    console.log('home:', userId)
    let url = selectedCategory == 0 
      ? `/photos/${userId}`
      : `/photos/${userId}/categ/` + selectedCategory;
    try {
      const resp = await axios.get(url);
      setPhotos(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePicture = async (photo) => {
    if (window.confirm("Are you sure that you want to delete the picture?") == true) {      
      try {
        await axios.delete(`/photos/${photo.idimage}/${photo.ImageId}`);
        await fetchPhotos(selectedCategory);
        setShowModal(false);
      } catch (err) {
        console.error(err);
      }
      return;
    }    
  };
console.log(photosFiltered)
  return (
    <>
      <div className="homeBackground">
        <NavBar  photos={photos} setPhotosFiltered={setPhotosFiltered} categoryList={categoryList} setCategory={setCategory} 
                selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} userName={userName} />
        <div className="container">
          <div className="row justify-content-center">
            <Sidebar userName={userName} />
            <div className="homeBox col-12 col-lg-8 col-md-8 col-sm-12 mt-5 mb-4 ">
              <div className="homeBoxContent">
                {photosFiltered.map((item, i) => (
                  <div
                    key={i}
                    className="homePictures d-flex d-inline-flex p-2"
                    onClick={() => handleShowModal(item)}
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
                <a href={'/edit/' + photo.idimage} className="col-9 btn btn-success rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  Update
                </a>
                <button onClick={() => deletePicture(photo)} className="col-3 btn btn-danger rounded mt-1 mb-1 fs-5 fw-bold text-white">
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