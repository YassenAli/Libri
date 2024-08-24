import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

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

  return (
    <div className="home-body">
      
      <div className="flex">
        
        <div className="home-container flex">
          <div className={`subcontainer ${showModal ? "show" : ""}`}>
            
            {books.map((book) => (
              <div
                className="img-container"
                key={book.id}
                onClick={() => handleCardClick(book)}
              >
                <div className="img-subcontainer">
                  <img
                    src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.image}`}
                    className="book-img"
                    id={book.id}
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
            ))}

            {/* Modal */}
            {showModal && selectedBook && (
              <div className="book-popup">
                <div className="book flex open">
                  <img
                    src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${selectedBook.image}`}
                    className="book-front"
                    alt={selectedBook.title}
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
                    style={{ backgroundImage: 'url(https://raw.githubusercontent.com/rishikumarr/images/main/36.jpeg)' }}
                  ></div>
                </div>
                <div className="popup-content">
                  <div className="content-left">
                    <button className="borw-btn">Borw</button>
                  </div>
                  <div className="content-right">
                    <h3 className="modal-title">{selectedBook.title}</h3>
                    <h6 className="modal-author">- {selectedBook.author}</h6>
                    <div className="description">
                      <p>{selectedBook.description}</p>
                    </div>
                    <div className="modal-genre">
                      <h4>{selectedBook.genre}</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Overlay */}
            {showModal && <div className="overlay" onClick={closeModal}></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
