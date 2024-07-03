import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Books = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      
    
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }} className="btn btn-primary p-2 m-2 text-white">
          Add new book
        </Link>
   
      <div className="books container">
      <div  className="book row">
        {books.map((book) => (
         
             <Card data={book} key={book.id}/>
           
         
        ))}
         </div>
      </div>

      
    </div>
  );
};

export default Books;




 {/* <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button> */}