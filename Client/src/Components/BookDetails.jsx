import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken, getdecodedToken } from "../helper/Storage";

const BookDetails = ({ book, closeModal }) => {
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [borrowId, setBorrowId] = useState(null);

  const userId = getdecodedToken().id;

  useEffect(() => {
    // Check if the book is already borrowed and set the borrowId state
    const checkBorrowedStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/borrows/${book.id}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        if (response.data && response.data.borrowId) {
          setBorrowId(response.data.borrowId);
        }
      } catch (error) {
        console.error("Error checking borrowed status:", error);
      }
    };

    checkBorrowedStatus();
  }, [book.id]);

  const handleBorrowClick = () => {
    setShowDatePopup(true);
  };

  const handleDateSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/borrows/",
        {
          userId,
          bookId: book.id,
          borrowDate,
          returnDate,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      alert("Book borrowed successfully!");
      setBorrowId(response.data.borrowId); // Set borrowId to mark as borrowed
      setShowDatePopup(false);
      closeModal();
    } catch (error) {
      console.error("Error borrowing book:", error);
      alert("Error borrowing book. Please try again.");
    }
  };

  const bookImg =
    book.coverImage === "https://placehold.co/150x200"
      ? book.coverImage
      : `/Server/uploads/profile/${book.coverImage}`;

  return (
    <>
      <div className="book-popup">
        <div className="book flex open">
          <img src={bookImg} className="book-front" alt={book.title} />
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
              backgroundImage: `url(${bookImg})`,
            }}
          ></div>
        </div>
        <div className="popup-content">
          <div className="content-left">
            {!borrowId && (
              <button className="borw-btn" onClick={handleBorrowClick}>
                Borrow
              </button>
            )}
            {borrowId && (
              <div className="bg-[#f988c5] text-[#62103c] px-4 md:h-[40px] flex flex-row justify-center items-center rounded-lg">
                Unavailable
              </div>
            )}
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
                onClick={() => setShowDatePopup(false)}
              >
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
