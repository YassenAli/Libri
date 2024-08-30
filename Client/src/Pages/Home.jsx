import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import BookDetails from "./BookDetails";
import "../App.css";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userEmail, setUserEmail] = useState(getAuthUser());

  const [books, setBooks] = useState({
    loading: false,
    results: [],
    err: "",
    reload: false,
  });

  useEffect(() => {
    const fetchBooks = () => {
      if (getAuthUser()) {
        setUserEmail(getAuthUser());
      } else {
        console.error("User is not authenticated or email is missing.");
        return;
      }

      setBooks({ ...books, loading: true });
      axios
        .get("http://localhost:5000/api/books", {
          params: { searchTerm: "" }, // Adjust if needed
        })
        .then((resp) => {
          setBooks({ ...books, results: resp.data, loading: false });
        })
        .catch((err) => {
          setBooks({
            ...books,
            loading: false,
            err: "Something went wrong, please try again later!",
          });
        });
    };

    fetchBooks();
  }, [books.reload]); // Trigger when 'reload' changes

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  const handleSearch = (book) => {
    setSearchTerm(book.target.value);
  };

  const filteredBooks = books.results.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-body">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg w-1/2"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="flex justify-center mt-8">
        <div className="home-container flex flex-wrap justify-center">
          <div className={`subcontainer ${showModal ? "show" : ""}`}>
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => handleCardClick(book)}
              />
            ))}

            {showModal && selectedBook && (
              <BookDetails book={selectedBook} closeModal={closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
