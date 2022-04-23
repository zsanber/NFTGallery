import React, { useEffect, useState, useReducer } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form';

export const Delete=()=> {
const [showModal, setShowModal] = useState(false);

const handleCloseModal = () => setShowModal(false);
const handleShowModal = (item) => {
    setShowModal(true);
};

    return (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="false"
          centered
        >
          <Modal.Body className="text-center">
            <div className="container">
              <div className="row justify-content-center">
               <h6>Are you sure you want to continue and delete the picture?</h6>
                <button className="col-6 btn btn-success rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  No
                </button>
                <button className="col-6 btn btn-danger rounded mt-1 mb-1 fs-5 fw-bold text-white">
                  Yes
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
  )
}