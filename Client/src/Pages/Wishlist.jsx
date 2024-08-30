// src/pages/Wishlist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiHeart } from 'react-icons/ti';
import { getToken } from '../helper/Storage'; // Replace with your actual auth utility

const Wishlist = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/wishlists/your-wishlist-id', {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setWishlistBooks(response.data);
      } catch (err) {
        setError('Something went wrong, please try again later!');
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/wishlists/your-wishlist-id/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setWishlistBooks(wishlistBooks.filter(book => book.id !== bookId));
    } catch (err) {
      setError('Failed to remove book from wishlist.');
    }
  };

  return (
    <div className="relative h-[400px] from-indigo-600 via-indigo-700">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0cafa7]">Your Wishlist</h1>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="shadow-lg rounded-lg overflow-hidden mx-3 md:mx-4">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Book img</th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Book title</th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Author</th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Genre</th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {wishlistBooks.map(book => (
                  <tr key={book.id}>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <img src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.image}`} alt={book.title} className="w-16 h-24 object-cover"/>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">{book.title}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{book.author}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{book.genre}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded text-xs"
                        onClick={() => handleRemoveFromWishlist(book.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
