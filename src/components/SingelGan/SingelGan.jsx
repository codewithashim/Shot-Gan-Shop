import React from 'react';
import './SingelGan.css'

const SingelGan = (props) => {
    const { img, name, bullet, action, category, price } = props.gun;
    const { Incares } = props
    return (
        <div className="card w-80 md:w-96 lg:w-full bg-base-100 shadow-xl p-4">
            <figure><img src={img} alt="Guns" className='gunImg' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h5 style={{ fontSize: '0.8rem' }}>{name}</h5>
                    <div className="badge badge-secondary">
                        <small style={{ fontSize: '0.56rem' }}>{action}</small>
                    </div>
                </h2>
                <h3 className='text-left'>Price : {price}</h3>
                <div className='flex justify-start'>
                    <button className="btn btn-sm btn-accent mr-3" onClick={() => Incares()}>Add To Cart</button>
                    <button className="btn btn-sm btn-primary mx-4">Details</button>
                </div>
                <div className="card-actions justify-start" style={{ fontSize: '0.8rem' }}>
                    <span>Category : <div className="badge badge-outline">{category}</div> </span>
                    <span>Bollet: <div className="badge badge-outline">{bullet}</div></span>
                </div>
            </div>
        </div>
    )
};

export default SingelGan;