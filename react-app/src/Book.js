import React from 'react'


const Book = ({img,title,Author}) => {
    //attribute, eventhandler
    //onClick ,onMouseOver
    //const {img,title,Author} = props
    const clickHandler=()=>{
      alert('hello world')
    }
      return (
      <article className='book'>
          <img src={img} alt=''/>
          <h1>{title}</h1>
          <h4>{Author}</h4>
          <button type="button" onClick={clickHandler}>
            reference ex
          </button>
      </article>
    )
  }

export default Book
