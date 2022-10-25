import React, { useEffect, useState } from 'react';

const Publishers = () => {
    const [publishers, setPublishers] = useState([]);
    const [bookDetails, setBookDetails] = useState([]);
    const [bookId, setBookId] = useState('');

    console.log(bookDetails);

    const filterByPublisher = publishers.filter(publisher => publisher.volumeInfo.publisher === 'John Wiley & Sons')
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes/?q=javascript+inpublisher:John%20Wiley%20&%20Sons&maxResults=20')
            .then(res => res.json())
            .then(data => setPublishers(data.items))
    }, [])

    // find a book by id 
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId && bookId}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookDetails(data));
    }, [])


    return (
        <div className='text-start my-5'>
            <h4>Editor's Pick</h4>
            <hr className="border w-50 border-dark mt-0 mb-3" />

            <div className="row g-3">
                {
                    filterByPublisher.map((publisher, index) => (
                        <div key={index} className="col-sm-2">
                            <img src={publisher?.volumeInfo?.imageLinks?.thumbnail}
                            onClick={() => setBookId(publisher?.id)}
                                className='img-fluid'
                                alt="publisher" />
                        </div>
                    ))
                }
            </div>

            {/* display book details  */}
            
        </div>
    );
};

export default Publishers;