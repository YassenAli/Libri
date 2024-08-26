import React, { useState } from "react";
import BookCard from "../Components/BookCard";
import BookDetails from "./BookDetails";
import "../App.css";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 0,
      image: "wilder-girls.jpeg",
      title: "Wilder Girls",
      author: "Rory Power",
      genre: "Drama",
      description:
        "This fresh debut is a mind-bending novel unlike anything you’ve read before. Rory Power’s work is a feminist Lord of the Flies about three best friends living in quarantine at their island boarding school.",
      price: 14,
    },
    {
      id: 1,
      image: "the-between.jpeg",
      title: "The Between",
      author: "David Hofmeyr",
      genre: "Fiction",
      description:
        "Seventeen-year-old Ana Moon is having a rough week. It starts with a fight after school, then suspension, followed by mandatory psych visits.",
      price: 16,
    },
    {
      id: 2,
      image: "our-italian-summer.jpeg",
      title: "Our Italian Summer",
      author: "Jennifer Probst",
      genre: "Romance",
      description:
        "Francesca is fiercely independent and successful in all areas of her life except one: family. When Allegra hangs out with a new crowd and is arrested for drug possession, Francesca gives in to her mother’s wish that they take one epic summer vacation to Italy.",
      price: 24,
    },
    {
      id: 3,
      image: "little-life.jpeg",
      title: "A Little Life",
      author: "Yanagihara",
      genre: "Biography",
      description:
        "A Little Life follows four college classmates—broke, adrift, and buoyed only by their friendship and ambition—as they move to New York in search of fame and fortune.",
      price: 18,
    },
  ];

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
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
              <BookCard key={book.id} book={book} onClick={handleCardClick} />
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
