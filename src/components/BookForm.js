import React, { useContext, useState } from 'react'
import BookContext from '../Contexts/BookContext'

const BookForm = () => {
const {dispatch} = useContext(BookContext)
const [title, setTitle] = useState('') 
const [author, setAuthor] = useState('')

const handleSubmit = (e)=>{
e.preventDefault()
dispatch({type: 'ADD_BOOK', book:{title, author}})
setTitle('')
setAuthor('')
}

const handleBookTitle = (e)=>{
    setTitle(e.target.value)
}

const handleBookAuthor = (e)=>{
    setAuthor(e.target.value)
}
return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type='text' placeholder='book title' value={title} onChange={handleBookTitle} required />
          <input type='text' placeholder='author' value={author} onChange={handleBookAuthor} required />
      <button type='submit'>add book</button>
      </form>
    </div>
  )
}

export default BookForm
