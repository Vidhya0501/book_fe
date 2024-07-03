import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form container-fluid">
       <div className="d-flex align-items-center justify-content-center centered">
       <div className="d-flex flex-column gap-4 w-96 p-5  shadow mt-5 rounded ">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        value={book.title}
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        value={book.desc}
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        value={book.price}
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        value={book.cover}
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
    </div>
    </div>
  );
};

export default Update;