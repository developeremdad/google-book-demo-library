import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [entries, setEntries] = useState(0);

    return (
        <div style={{backgroundColor: '#fde47c', height: '100vh'}}>
            <div className="container py-4">
                <h2 className='fw-bold'>Demo Book Library</h2>
                <div className="row g-3 my-4 text-start">
                    <div className="col-sm-6">
                        <h4>Recently Release Books</h4>
                        <hr className="border w-50 border-dark m-0" />
                        <ol className='fw-bold'>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                        </ol>
                    </div>
                    <div className="col-sm-6">
                        <h4>Top Books</h4>
                        <hr className="border w-50 border-dark m-0" />
                        <ol className='fw-bold'>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                            <li>demo book title 1</li>
                        </ol>
                        <div>
                            <p className='fw-bold'>
                                <span className='me-3'>Show</span> 
                                <button onClick={() => setEntries(entries + 1)} 
                                className="entries-btn me-3">+</button>
                                <span className='me-3'>{entries}</span>
                                <button onClick={() => setEntries(entries - 1)}  
                                {...(entries == 0 ? {disabled: true } : {})} 
                                className="entries-btn me-3">-</button>
                                <span className='me-3'>entries</span>
                                <button className="entries-go-btn">Go</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;