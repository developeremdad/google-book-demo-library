import React, { useEffect, useState } from 'react';
import Publishers from '../Publishers/Publishers';
import './Home.css';

const Home = () => {
    const [entries, setEntries] = useState(3);
    const [recentBooks, setRecentBooks] = useState([]);
    const [trendyBooks, setTrendyBooks] = useState([]);
    const [entriesNum, setEntriesNum] = useState(3);

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes/?q=web&orderBy=newest&maxResults=8')
            .then(res => res.json())
            .then(data => setRecentBooks(data.items))
    }, [])

    const handleTrendyBooks = () =>{
        setEntriesNum(entries);
    }
        useEffect(() => {
            fetch(`https://www.googleapis.com/books/v1/volumes/?q=javascript&maxResults=${entriesNum}`)
                .then(res => res.json())
                .then(data => setTrendyBooks(data.items))
        }, [entriesNum])
    

    return (
        <div style={{ backgroundColor: '#dff9fb', height: '100%' }}>
            <div className="container py-4">
                <h2 className='fw-bold'>Demo Book Library</h2>
                <div className="row g-3 my-4 text-start">
                    <div className="col-sm-6">
                        <h4>Recently Release Books</h4>
                        <hr className="border w-50 border-dark m-0" />
                        <ol className='fw-bold'>
                            {
                                recentBooks?.map((book, index) => (
                                    <li key={book.id}>{book?.volumeInfo?.title}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className="col-sm-6">
                        <h4>Top Books</h4>
                        <hr className="border w-50 border-dark m-0" />
                        <ol className='fw-bold'>
                            {
                                trendyBooks?.map((book, index) =>(
                                    <li key={index}>{(book?.volumeInfo?.title)}</li>
                                ))
                            }
                        </ol>
                        <div>
                            <p className='fw-bold'>
                                <span className='me-3'>Show</span>
                                <button onClick={() => setEntries(entries + 1)}
                                    className="entries-btn me-3">+</button>
                                <span className='me-3'>{entries}</span>
                                <button onClick={() => setEntries(entries - 1)}
                                    {...(entries == 0 ? { disabled: true } : {})}
                                    className="entries-btn me-3" id='entries-btn-minus'>-</button>
                                <span className='me-3'>entries</span>
                                <button onClick={handleTrendyBooks} className="entries-go-btn">Go</button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* editor section  */}
                <Publishers />
            </div>
        </div>
    );
};

export default Home;