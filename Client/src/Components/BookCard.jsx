// src/components/BookCard.js
import React from "react";

const BookCard = ({ book, onClick }) => {
  return (
    <div className="img-container" onClick={() => onClick(book)}>
      <div className="img-subcontainer">
        <img
          src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.image}`}
          className="book-img"
          alt={book.title}
        />
      </div>
      <div className="card-content flex">
        <h3 className="booktitle">{book.title}</h3>
        <div className="bookwrapper flex">
          <p className="default">- by </p>
          <p className="author">{book.author}</p>
        </div>
        <p className="genre">{book.genre}</p>
      </div>
    </div>
  );
};

export default BookCard;
