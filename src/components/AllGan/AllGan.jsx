import React, { useEffect } from 'react';
import './AllGan.css'
import { useState } from 'react';
import SingelGan from '../SingelGan/SingelGan'

const AllGan = ({ Incares }) => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/mir-hussain/guns/main/data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    return (
        <section className='mt-6 mx-6'>
            <div className="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className='px-2'> {guns.length} Item Found. Tap to see.</span>
                </div>
            </div>
            <section className='mt-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                {
                    guns.map(gun => {
                        return (
                            <div>
                                <SingelGan gun={gun} key={gun.id} Incares={Incares}></SingelGan>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    );
};


export default AllGan;