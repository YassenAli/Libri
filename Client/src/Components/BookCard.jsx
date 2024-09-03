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
        await axios.put(
          `http://localhost:5000/api/wishlists/${getAuthUser().WishlistId}/${
            book.id
          }`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        // setIsInWishlist(false);
      } else {
        // Add to wishlist
        await axios.post(
          `http://localhost:5000/api/wishlists/addToWishlist`,
          {
            bookId: book.id,
            wishlistId: getdecodedToken().WishlistId,
          },
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        setIsInWishlist(true);
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  // console.log(book.coverImage);

  const bookImg =
    book.coverImage === "https://placehold.co/150x200"
      ? "https://placehold.co/150x200"
      : `/Server/uploads/profile/${book.coverImage}`;

  return (
    <>
      <div className="img-container">
        {/* Wishlist button */}
        <button
          // className={`wishlist-button ${isInWishlist ? 'in-wishlist' : ''}`}
          className=" wishlist-btn absolute top-2 right-2 p-2 text-[25px] text-[#ff146d] z-1"
          onClick={handleWishlistToggle}
        >
          {/* <TiHeart /> */}
          {isInWishlist ? <TiHeartFullOutline /> : <TiHeartOutline />}
        </button>
        <div className="img-subcontainer">
          <img
            src={bookImg}
            className="book-img"
            alt={book.title}
            onClick={() => onClick(book)}
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
    </>
  );
};

export default BookCard;
