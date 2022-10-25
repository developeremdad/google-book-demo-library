import React from 'react';

const BookDetails = ({bookDetails}) => {
    const book = bookDetails?.volumeInfo;
    return (
        <div className='my-5 py-4'>
            <div className="container">
                <div className="row g-3 border border-dark">
                    <div className="col-sm-4">
                        <img src={book?.imageLinks?.thumbnail} className='w-100' alt="Book photo" />
                    </div>
                    <div className="col-sm-8 text-start border-start border-dark">
                        <h5>{book?.title}</h5>
                        <p className='m-0'><b>Author:</b> {book?.authors[0]}</p>
                        <p><b>Publisher:</b> {book?.publisher} <b className='mx-4'>|</b> {book?.publishedDate}</p>
                        <p>{book?.description.slice(3,500)}</p>
                        <p className='m-0'><b> {book?.industryIdentifiers[0]?.type}: </b> {book?.industryIdentifiers[0]?.identifier}</p>
                        <p className='m-0'><b> Pages: </b> {book?.pageCount}</p>
                        <a href={book?.previewLink} target="_blank" className='text-decoration-none text-primary fw-bold' rel="book">Preview Book</a>
                        <p className='m-0'><b>Language: </b> {book?.language}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;