import React from 'react'
import '../App.css'


const initialBookshelf = [
  { title: 'The Wind Up Bird Chronicles', author: 'Haruki Murakami'},
  { title: 'Caliban and the Witch', author: "Silvia Federici"}
]


function Bookshelf() {

const [books, setBooks] = React.useState(initialBookshelf)

const [currentBook, setCurrentBook] = React.useState({
    title: "",
    author: ""
  })

function handleNameChange(e) {
  const newCurrentBook = structuredClone(currentBook)
  newCurrentBook[e.target.name] = e.target.value   // ! refactored code -- see commented out code below 
  setCurrentBook(newCurrentBook)
  
}

// function handleAuthorChange(e) {
//   const newCurrentAuthor = structuredClone(currentBook)
//   newCurrentAuthor[e.target.name]= e.target.value
//   setCurrentBook(newCurrentAuthor)
// }

function handleSubmit(e) {
  e.preventDefault()
  const newBookCard = structuredClone(books)
  console.log(currentBook);
  newBookCard.push(currentBook)
  
  setBooks(newBookCard)
  
  setCurrentBook({
    title: "",
    author: ""
  })
}

function handleReset() {
  // ? Clear completely
  // to completely clear, we must set emoji bag to empty array
  // setBooks([])
  // ? Reset to initialBookshelf const
  setBooks(initialBookshelf)
}

function handleDeleteOne(bookIndex) {
  const newBook = structuredClone(books)
  newBook.splice(bookIndex, 1)
  setBooks(newBook)
}

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <input
      placeholder="Add book title"
      name="title"
      type="text"
      onChange={handleNameChange}
      value={currentBook.title}
      />
      <input
      placeholder="Add author name"
      name="author"
      type="text"
      onChange={handleNameChange}
      value={currentBook.author}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    <button onClick={handleReset}>Reset</button>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => {
    return <div className="bookCard" key={index}>"{book.title}" by <em>{book.author}</em><button onClick={() => handleDeleteOne(index)} className="deleteOne">Delete</button></div>
  })}</div>
</div>
)
}

export default Bookshelf