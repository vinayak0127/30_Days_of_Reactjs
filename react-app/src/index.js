import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {books} from './books'
import Book from './Book'
import {greeting} from './greeting'




const BookList=()=> {
  return (
    <section className='booklist'>
      {books.map((book)=>{
        const {img,title,Author}=book;
        return (
          <Book key={book.id}{...book}></Book>
        )
      })}
    </section>
  )
}

//jsx
ReactDOM.render( 
<BookList />
  
  ,document.getElementById('root')
);

reportWebVitals();
//freecodecamp
//props
//2:16:00