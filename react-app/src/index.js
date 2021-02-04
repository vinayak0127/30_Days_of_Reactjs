import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Title = 'Ikigai: The Japanese secret to a long and happy life'
const Author = '~Héctor García'
const img =' https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'
function BookList() {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = (props) => {
console.log(props)
  return (
    <article className='book'>
        <img
          src={img}
          alt=''
        />
        <h1>{Title}</h1>
        <h4>{Author}</h4>
    </article>
  )
}

//jsx
ReactDOM.render( <BookList />,document.getElementById('root')
);

reportWebVitals();
//freecodecamp
//props
//2:16:00