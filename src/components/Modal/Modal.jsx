import React from 'react';
import './Modal.css'

const Modal = ({ modalData, setModalData }) => {

    return (
        <section>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => setModalData(null)}
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">{modalData.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </section>
    );
};

export default Modal;