import React,{useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import { Sidebar } from './Sidebar';
import { TopBar } from './Topbar';

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
        <div>
        <TopBar /> 
            <div className="homeBackground pt-5 pb-5 pr-5 pl-5">
                <div className="homeBoxSideBar col-3 ml-20 order-2"> <Sidebar /> </div>  
                <div className="homeBox col-7 order-1">
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

        <Modal show={showModal} onHide={handleCloseModal} backdrop="false" centered>
                <Modal.Body className="text-center" onClick={handleCloseModal}>
                    <img className="img-fluid" src={photo.url} />
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
  )
}