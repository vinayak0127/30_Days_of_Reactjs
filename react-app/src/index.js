import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyInfo() {
  return (
    <div>
      <h1>
        hwy this is Vinayak raj , software engineer
      </h1>
      <p>
        undergraduate from india 
      </p>
      <h2>Skills i know</h2>
      <ul>
        <li>
          c++
        </li>
        <li>
          javascript
        </li>
        <li>
          python
        </li>
      </ul>
    </div>
  )
}

//jsx
ReactDOM.render(
  <MyInfo/>,//functional component
  document.getElementById('root')
);

reportWebVitals();
//26:min
freecodecamp
