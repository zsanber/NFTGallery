import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { Sidebar } from './Sidebar';

export const Home=()=> {
    const [photos,setPhotos]=useState([])
    useEffect(()=>{
        fetchImages();
    },[]) 

    const fetchImages = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
            setPhotos(resp.data)
        } catch (err) {
            console.error(err);
        }
      };

    return (
            <div className="homeBackground position-absolute pt-5 pb-5 ">
                <div  className="homeBox col-7 p-4 column">
                    <div class="card-container">
                            {photos.map((item,i) => (
                                <div key={i} className="card d-flex flex-row d-inline-flex justify-content-between align-items-center flex-wrap p-2" data-bs-toggle="modal" data-bs-target="#ImageModal">
                                    <img src={item.thumbnailUrl} alt={item.title} 
                                            style={ item.showInfo ? {display : 'img'} : {display : 'block'}}
                                            onClick={item.showInfo = true} />
                                    <div style={ !item.showInfo ? {display : 'none'} : {display : 'block'} }
                                            onClick={item.showInfo = true}>
                                        <div class="back">
                                            <div class="header">
                                                <h5 class="motto">"mindenféle infó ami renderelődik "</h5>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            <div className="homeBoxSideBar col-3 ml-20">
                <Sidebar />
            </div> 
        </div>       
  )
}