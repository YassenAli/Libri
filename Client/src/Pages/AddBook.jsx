import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { BiSolidImageAdd } from "react-icons/bi";
import { Alert } from "react-bootstrap";
import { getAuthUser, getToken } from "../helper/Storage";
import axios from "axios";

import Loader from "../Components/Shared/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { BsImage } from "react-icons/bs";
import { FaImages } from "react-icons/fa6";

export default function AddBook() {
  // const auth = getAuthUser();

  const [bookData, setBookData] = useState({
    loading: false,
    title: "",
    description: "",
    genre: "",
    author: "",
    // img: "",
    err: "",
    success: null,
    reload: false,
  });
  const img = useRef(null);

  // GEt Books
  useEffect(() => {
    setBookData({ ...bookData, loading: true });
    axios
      .get("http://localhost:5000/api/books/", {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      })
      .then((resp) => {
        setBookData({ ...bookData, results: resp.data, loading: false });
      })
      .catch((err) => {
        setBookData({
          ...bookData,
          loading: false,
          err: "somthing went wrong, please try again later!",
        });
      });
  }, []);

  //HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // CREATE book ON SUBMIT
  const createBook = (e) => {
    e.preventDefault();
    setBookData({ ...bookData, loading: true });
    const formData = new FormData();
    formData.append("title", bookData.title);
    formData.append("description", bookData.description);
    formData.append("genre", bookData.genre);
    formData.append("author", bookData.author);

    if (img.current.files && img.current.files[0]) {
      formData.append("img", img.current.files[0]);
    }
    axios
      .post("http://localhost:5000/api/books/", formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multi-part/form-data",
        },
      })
      .then((resp) => {
        setBookData({ ...bookData, success: "Book Added Successfully" });
        img.current.files = null;
      })
      .catch((err) => {
        console.log(err);
        setBookData({
          ...bookData,
          success: null,
          err: "some thing went wrong, please try again later!",
        });
      });
  };

  return (
    <div class="container mx-auto p-4">
      {/*  Page Title  */}
      <h1 class="text-3xl font-bold text-[black] mb-6 mx-auto flex justify-center">
        Add Your Book
      </h1>

      <form onSubmit={createBook} class="grid grid-cols-1 gap-6">
        {bookData.err && (
          <Alert variant={"danger"} className="auth-alert w-100">
            {bookData.err}
          </Alert>
        )}
        {bookData.success && (
          <Alert variant={"success"} className="auth-alert w-100">
            {bookData.success}
          </Alert>
        )}
        {/*  title  */}
        <div class="p-2">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Book Title"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: "#f6f6f6" }}
            value={bookData.title}
            onChange={handleChange}
          />
        </div>

        {/*  Description  */}
        <div class="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Book Description"
              class="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={handleChange}
              value={bookData.description}
            ></textarea>
          </div>

          {/*  Book Img Upload  */}
          <div>
            <label
              for="img"
              class="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <BiSolidImageAdd fontSize={"100px"} />
                </div>
                <p className="text-gray-500">Choose or drag book image here</p>
                <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>
            </label>
            <input
              id="img"
              name="img"
              type="file"
              accept="image/*"
              class="sr-only"
              ref={img}
              required
            />
          </div>
        </div>

        <div class="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author Name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={handleChange}
              value={bookData.author}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Genre"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              onChange={handleChange}
              value={bookData.genre}
              required
            />
          </div>
        </div>

        <div class="col-span-full mt-6 p-2">
          <button
            type="submit"
            class="block w-full bg-[#20b2aa] hover:bg-[#15635f] text-white font-bold py-3 px-4 rounded-full"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
