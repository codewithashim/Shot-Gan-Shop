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
                    <figure><img src={modalData.img} alt="Guns" className='gunImg' /></figure>
                    <div className="card-actions justify-start" style={{ fontSize: '1.5rem', marginTop: '0.7rem' }}>
                        <span className='mr-5'>Category : <div className="badge badge-outline">{modalData.category}</div> </span>
                        <span>Bollet: <div className="badge badge-outline">{modalData.bullet}</div></span>
                    </div>
                    <div className="card-actions justify-start" style={{ fontSize: '1.5rem', marginTop: '0.7rem' }}>
                        <span className='mr-5'>Action : <div className="badge badge-outline">{modalData.action}</div> </span>
                        <span>Capacity: <div className="badge badge-outline">{modalData.capacity}</div></span>
                    </div>
                    <div className="card-actions justify-start" style={{ fontSize: '1.5rem', marginTop: '0.7rem' }}>
                        <span className='mr-5'>Price : <div className="badge badge-outline">{modalData.price}</div> </span>
                        <span>Category: <div className="badge badge-outline">{modalData.category}</div></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;