import React, { useState } from "react";

const BookDetails = ({ book, closeModal }) => {
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  if (!book) return null;

  const handleBorrowClick = () => {
    setShowDatePopup(true);
  };

  const handleDateSubmit = () => {
    // Handle date submission logic here
    console.log("Borrow Date:", borrowDate);
    console.log("Return Date:", returnDate);
    setShowDatePopup(false);
  };

  return (
    <>
      <div className="book-popup">
        <div className="book flex open">
          <img
            src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.image}`}
            className="book-front"
            alt={book.title}
          />
          <ul className="pages">
            <li className="page one"></li>
            <li className="page two"></li>
            <li className="page three"></li>
            <li className="page four"></li>
            <li className="page five"></li>
            <li className="page six"></li>
            <li className="page seven"></li>
          </ul>
          <div
            className="book-back"
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/rishikumarr/images/main/36.jpeg)",
            }}
          ></div>
        </div>
        <div className="popup-content">
          <div className="content-left">
            <button className="borw-btn"
              onClick={handleBorrowClick}>
              Borrow
            </button>
          </div>
          <div className="content-right">
            <h3 className="modal-title">{book.title}</h3>
            <h6 className="modal-author">- {book.author}</h6>
            <div className="description">
              <p>{book.description}</p>
            </div>
            <div className="modal-genre">
              <h4>{book.genre}</h4>
            </div>
          </div>
        </div>
      </div>

      {showDatePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#20b2aa61]">
          <div className="p-8 rounded-lg shadow-lg w-96 bg-[floralwhite]">
            <h2 className="text-xl font-bold mb-4">Choose Dates</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Borrow Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={borrowDate}
                onChange={(e) => setBorrowDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Return Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[lightseagreen] text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleDateSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setShowDatePopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overlay" onClick={closeModal}></div>
    </>
  );
};

export default BookDetails;
