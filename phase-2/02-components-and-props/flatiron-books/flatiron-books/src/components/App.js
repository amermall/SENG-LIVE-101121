
import Header from "./Header";
import Form from "./Form";
import BookContainer from "./BookContainer";

//TODO: Create a components folder
//TODO: Create Header, Form, Genre and BookContainer components
//TODO: Dynamically render BookCard in BookContainer using data from books.js

import {books, genres} from "../data/books";

function App() {
  console.log('hi from app')
  return (
    <div>
      {/* Adding props or properties inside my header */}
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code" />

      <Form />
      <BookContainer bookList={books} genresList={genres} />
    </div>
  );
}

export default App;
