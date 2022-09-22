import React, { useState } from 'react';

const Counter = () => {
    const [counts, setCounts] = useState(0)

    const Incares = () => {
        const newCounter = counts + 1
        setCounts(newCounter)
    }

    return (
        <section>
            <h1>{counts}</h1>
            <button onClick={Incares}>Incrase</button>
        </section>
    );
};

export default Counter;