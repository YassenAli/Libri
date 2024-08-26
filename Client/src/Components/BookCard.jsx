// import React, { useState } from "react";
// import "./components.css";
// import { MdAccessTime } from "react-icons/md";
// import { IoLocationOutline } from "react-icons/io5";
// import { TbTicketOff } from "react-icons/tb";
// import { TbTicket } from "react-icons/tb";
// import { BsCalendar2Event } from "react-icons/bs";

// const Ticket = ({ props, handleCardClick }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);
//   return (
//     <div
//     className="img-container"
//     key={props.id}
//     onClick={() => handleCardClick([props])}
//   >
//     <div className="img-subcontainer">
//       <img
//         src={`https://raw.githubusercontent.com/rishikumarr/images/main/hand-picked-books/${book.image}`}
//         className="book-img"
//         id={props.id}
//         alt={props.title}
//       />
//     </div>
//     <div className="card-content flex">
//       <h3 className="booktitle">{props.title}</h3>
//       <div className="bookwrapper flex">
//         <p className="default">- by </p>
//         <p className="author">{props.author}</p>
//       </div>
//       <p className="genre">{props.genre}</p>
//     </div>
//   </div>
//   );
// };

// export default Ticket;