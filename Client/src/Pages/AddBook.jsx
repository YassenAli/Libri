import React, { useState, useEffect } from "react";
import "../App.css";
import { Alert } from "react-bootstrap";
import { getAuthUser, getAccessToken } from "../helper/Storage";
import Loader from "../Components/Shared/Loader";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { BsImage } from "react-icons/bs";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaImages } from "react-icons/fa6";

export default function AddEvent() {
  // const auth = getAuthUser();

  // const [eventData, setEventData] = useState({
  //   loading: false,
  //   name: "",
  //   description: "",
  //   date: "",
  //   time: "",
  //   location: "",
  //   err: "",
  //   success: null,
  //   reload: false,
  // });

  // // HITTING API
  // useEffect(() => {
  //   setEventData({ ...eventData, loading: true });
  //   axios
  //     .get("http://127.0.0.1:8000/api/events/", {
  //       headers: {
  //         Authorization: `Bearer ${getAccessToken()}`,
  //       },
  //     })
  //     .then((resp) => {
  //       setEventData({ ...eventData, results: resp.data, loading: false });
  //     })
  //     .catch((err) => {
  //       setEventData({
  //         ...eventData,
  //         loading: false,
  //         err: "somthing went wrong, please try again later!",
  //       });
  //     });
  // }, []);

  // //HANDLE CHANGE
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEventData({ ...eventData, [name]: value });
  // };

  // //CREATE EVENT ON SUBMIT
  // const createEvent = (e) => {
  //   e.preventDefault();
  //   setEventData({ ...eventData, loading: true });
  //   const formData = new FormData();
  //   formData.append("name", eventData.name);
  //   formData.append("description", eventData.description);
  //   formData.append("date", eventData.date);
  //   formData.append("time", eventData.time);
  //   formData.append("location", eventData.location);
  //   axios
  //     .post("http://127.0.0.1:8000/api/events/", formData, {/>
  //       headers: {
  //         Authorization: `Bearer ${getAccessToken()}`,
  //       },
  //     })
  //     .then((resp) => {
  //       // console.log(resp)
  //       setEventData({ ...eventData, success: "Book Added Successfully" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setEventData({
  //         ...eventData,
  //         success: null,
  //         err: "some thing went wrong, please try again later!",
  //       });
  //     });
  // };

  return (
    <div class="container mx-auto p-4">
    {/* <!-- Page Title --> */}
    <h1 class="text-3xl font-bold text-[black] mb-6 mx-auto flex justify-center">Add Your Book</h1>
  
    <form class="grid grid-cols-1 gap-6">
      {/* <!-- Username --> */}
      <div class="p-2">
        <input type="text" id="userName" name="Book Title" placeholder="Book Title" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: "#f6f6f6"}} />
      </div>
  
      
  
      {/* <!-- bio and Image Upload --> */}
      <div class="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <textarea id="bio" name="bio" rows="3" placeholder="Book Description" class="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: "#f6f6f6"}}></textarea>
        </div>
  
        <div>
          <label for="avatar" class="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
          <div className="flex flex-col items-center text-center">
      <div className="mb-2">
        {/* icon */} <BiSolidImageAdd fontSize={"100px"} />
      </div>
      <p className="text-gray-500">Choose or drag book image here</p>
      <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
    </div>
          </label>
          <input id="avatar" name="avatar" type="file" accept="image/*" class="sr-only" />
        </div>
      </div>
  
      <div class="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input type="text" id="AuthorName" name="AuthorName" placeholder="Author Name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: "#f6f6f6"}} />
        </div>
          <div>
          <input type="text" id="genre" name="genre" placeholder="Genre" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: "#f6f6f6"}} />
        </div>
      </div>
  
    
      
  
      <div class="col-span-full mt-6 p-2">
        <button type="submit" class="block w-full bg-[#20b2aa] hover:bg-[#15635f] text-white font-bold py-3 px-4 rounded-full">
          Add Book
        </button>
      </div>
    </form>
  </div>
  );
}
