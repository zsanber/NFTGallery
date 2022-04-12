import React,{useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import { Sidebar } from './Sidebar';

export const Home=()=> {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [photos, setPhotos]=useState([])
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState({});

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
            <div className="homeBackground pt-5 pb-5 pr-5 pl-5 ">
                <div className="homeBoxSideBar col-3 mr-20">
                    <Sidebar />
                </div>     

            <div className="homeBox col-7">
                        <div className="homeBoxContent">
                        {photos.map((item,i) => (
                            <div key={i} 
                            className="d-flex d-inline-flex p-2" 
                            onClick={() => handleShowModal(item)}>
                                <img src={item.thumbnailUrl} alt={item.title} 
                                        style={{ display : item.showInfo ? 'none' : 'block' }} />
                                <img src={item.url} alt={item.title} 
                                        style={{ display : !item.showInfo ? 'none' : 'block' }} />
                                {/* <div style={{ display : item.showInfo ? 'block' : 'none' }}>
                                    <div className="back">
                                        <div className="header">
                                            <h5 className="motto">"mindenféle infó ami renderelődik "</h5>
                                        </div>
                                    </div> 
                                </div> */}
                            </div>
                        ))}   
                        </div>    
                </div>            
        </div>  
        
        <Modal show={showModal} onHide={handleCloseModal} backdrop="false" centered>
                <Modal.Body className="justify-center" onClick={handleCloseModal}>
                    <img src={photo.url} />
                    <button className="btn btn-info form-control rounded mt-2 mb-1 fs-5 fw-bold text-white justify-center" 
                    href="" >Information about the image</button>
                </Modal.Body>

            </Modal>     
        </div>            
  )
}