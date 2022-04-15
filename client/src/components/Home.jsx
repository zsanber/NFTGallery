import React,{useEffect, useState, useReducer} from 'react';
import { motion } from "framer-motion";
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import {Terms} from './Terms';

export const Home=()=> {
    const [forceUpdate] = useReducer(x => x + 1, 0);
    const [photos, setPhotos]=useState([])
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState({});

   {/* const [showPhotoInfo, setShowPhotoInfo] = useState(false);
    const [photoInfo, setPhotoInfo] = useState({});
    const handleClosePhotoInfo = () => setShowPhotoInfo(false);
    const handleShowPhotoInfo = (item) => {
        setPhotoInfo(item);
        setShowPhotoInfo(true);
    } */}

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (item) => {
        setPhoto(item);
        setShowModal(true);
    }

    useEffect(()=>{
        fetchImages();
    },[]) 

    const fetchImages = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos`);            
            setPhotos(resp.data.slice(0, 200))
        } catch (err) {
            console.error(err);
        }
      };

      function toogleInfo(item) {
        item.showInfo = !item.showInfo;
        forceUpdate();
      };

    return (
        <>
        <div className="homeBackground">
        <NavBar /> 
          <div className="container">
            <div className="row">
            <Sidebar />
                <div className="homeBox col-8 mb-5 mt-5 order-1">
                            <div className="homeBoxContent">
                            {photos.map((item,i) => (
                                <div key={i} 
                                className="homePictures d-flex d-inline-flex p-2" 
                                onClick={() => handleShowModal(item)}>
                                    <img src={item.thumbnailUrl} alt={item.title} 
                                            style={{ display : item.showInfo ? 'none' : 'block' }} />
                                    <img src={item.url} alt={item.title} 
                                            style={{ display : !item.showInfo ? 'none' : 'block' }} />
                                </div>
                            ))}  
                    </div> 
                </div>   
            </div>      
            <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
                    <Terms />
            </div>         
        </div>  

          

        <Modal show={showModal} onHide={handleCloseModal} backdrop="false" centered>
                <Modal.Body className="text-center" onClick={handleCloseModal}>
                    <motion.img
                    className="movingImage img-fluid"
                    src={photo.url} 
                    whileHover={{ scale: 1.03}}
                    whileTap={{ scale: 0.8, rotate: -180, borderRadius: "90%" }}
                    />

                    <button className="col-3 btn btn-info form-control rounded mt-2 mb-1 fs-5 fw-bold text-white" 
                         href="" >Information about the image</button>
                    <button className="col-1 btn btn-danger form-control rounded mt-2 mb-1 fs-5 fw-bold text-white" 
                         href="" >Delete</button>
                </Modal.Body>
        </Modal>  

        
        
       {/* <Modal show={showModal} onHide={handleCloseModal} backdrop="false" centered>
                <Modal.Body className="text-center" onClick={handleCloseModal}>
                    <img className="img-fluid" src={photo.url} />
                    <div className="col-3 btn btn-info form-control rounded mt-2 mb-1 fs-5 fw-bold text-white" 
                        show={showPhotoInfo} onHide={handleClosePhotoInfo} backdrop="false"
                        onClick={() => handleShowPhotoInfo()}>
                                    <div alt={photo.title} style={{ display : photo.showInfo ? 'none' : 'block' }}>
                                        <img className="img-fluid" src={photo.url} />
                                    </div>
                                    <div style={{ display : photo.showInfo ? 'none' : 'block' }}>
                                        <div className="info">
                                                <h5 className="motto">Title: {photo.title}</h5>
                                                <h5 className="motto">Url: {photo.url}</h5>
                                        </div> 
                                    </div>
                                    Information about the image   
                                </div> 
                            ))}  

                    <button className="col-1 btn btn-danger form-control rounded mt-2 mb-1 fs-5 fw-bold text-white" 
                         href="" >Delete</button>
                </Modal.Body>
        </Modal>   */}
        </div>
    </>            
  )
}