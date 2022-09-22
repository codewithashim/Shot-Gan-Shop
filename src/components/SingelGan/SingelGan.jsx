import React from 'react';
import Modal from '../Modal/Modal';
import './SingelGan.css'
import { useState } from 'react';

const SingelGan = (props) => {
    const [modalData, setModalData] = useState({})
    const { Incares, gun } = props
    const { img, name, bullet, action, category, price } = props.gun;
    return (
        <div className="card w-80 md:w-96 lg:w-full bg-base-100 shadow-xl p-4">
            <figure><img src={img} alt="Guns" className='gunImg' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h5 style={{ fontSize: '1.4rem' }}>{name}</h5>
                </h2>
                <div className="badge badge-secondary">
                    <small style={{ fontSize: '1rem' }}>{action}</small>
                </div>
                <h3 className='text-left'>Price : {price}</h3>
                <div className='flex justify-start'>
                    <button className="btn btn-sm btn-accent mr-3" onClick={() => Incares()}>Add To Cart</button>
                    {/* <button className="btn btn-sm btn-primary mx-4">Details</button> */}
                    <label onClick={() => { setModalData(gun) }} htmlFor="my-modal-3" className="btn btn-sm btn-primary mx-4 modal-button">
                        Details
                    </label>
                </div>
                <div className="card-actions justify-start" style={{ fontSize: '1rem', marginTop: '0.7rem' }}>
                    <span>Category : <div className="badge badge-outline">{category}</div> </span>
                    <span>Bollet: <div className="badge badge-outline">{bullet}</div></span>
                </div>
            </div>
            {
                modalData && (
                    <Modal modalData={modalData} setModalData={setModalData}></Modal>
                )
            }
        </div>
    )
};

export default SingelGan;