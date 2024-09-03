import React, { useState } from "react";
import axios from "axios";
import { TiHeart } from "react-icons/ti";
import { getAuthUser, getToken, getdecodedToken } from "../helper/Storage";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";

const BookCard = ({ book, onClick }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistToggle = async () => {
    try {
      if (isInWishlist) {
        // Remove from wishlist
        await axios.put(`http://localhost:5000/api/wishlists/${getAuthUser().WishlistId}/${book.id}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setIsInWishlist(false);
      } else {
        // Add to wishlist
        await axios.post(`http://localhost:5000/api/wishlists/addToWishlist`, {
          bookId: book.id,
          wishlistId: getdecodedToken().WishlistId,
        }, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setIsInWishlist(true);
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  return (
    <div className="img-container" onClick={() => onClick(book)}>
      <div className="img-subcontainer">
      <button
          // className={`wishlist-button ${isInWishlist ? 'in-wishlist' : ''}`}
          className="absolute top-0 right-0 p-2 me-1 z-5 text-[25px] text-[#ff146d]"
          onClick={handleWishlistToggle}
        >
          {/* <TiHeart /> */}
          {isInWishlist ? <TiHeartFullOutline  /> : <TiHeartOutline />}
        </button>
        <img
          src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.coverImage}`}
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
