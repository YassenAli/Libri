import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getdecodedToken, getToken } from "../helper/Storage";


export default function Profile({  }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const userId = getdecodedToken().id;


  useEffect(() => {
    // console.log("token", getToken());

    // Fetch borrowed books from the API
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/borrows/` , {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          }
        });
        // console.log("response", response);
        setBorrowedBooks(response.data);
      } catch (error) {
        console.error('Error fetching borrowed books:', error);
      }
    };
    
    fetchBorrowedBooks();
  }, [userId]);

  const handleRelease = async (borrowId) => {
    console.log("borrowId", borrowId);
    try {
      await axios.put(`http://localhost:5000/api/borrows/${borrowId}`, {}, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      });
      // setBorrowedBooks(borrowedBooks.filter(borrow => borrow.id !== borrowId));
      setBorrowedBooks(borrowedBooks.filter(({ borrowId: id }) => id !== borrowId));

      alert('Book released successfully!');
    } catch (error) {
      console.error('Error releasing book:', error);
      alert('Error releasing book. Please try again.');
    }
  };

  console.log("borrowedBooks", borrowedBooks);

  return (
    <section className="w-full overflow-hidden dark:bg-gray-900 rounded-[26px]">
      <div className="w-full mx-auto bg-[#c5e0dd]">
        {/* ...existing profile styling... */}

        <div className="w-full flex gap-4 justify-center items-center ">
          <div className="relative h-[400px] from-indigo-600 via-indigo-700 ">
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
              <h1 className="text-1xl md:text-3xl font-bold text-[deeppink]">
                Your Borrowed Books
              </h1>
              {/* Borrowed books table */}
              <div className="shadow-lg rounded-lg overflow-hidden mx-3 md:mx-4">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                        Book img
                      </th>
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                        Book title
                      </th>
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                        Author
                      </th>
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                        Genre
                      </th>
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {borrowedBooks.map(({borrowId, book}) => (
                      <tr key={book.id}>
                        <td className="py-4 px-6 border-b border-gray-200">
                          <img
                            src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.coverImage}`}
                            alt={book.title}
                            className="w-16 h-24 object-cover"
                          />
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                          {book.title}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          {book.author}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          {book.genre}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          <button
                            className="bg-red-500 text-white py-2 px-8 rounded-[5px] text-xs"
                            onClick={() => handleRelease(borrowId)}
                          >
                            Release
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
