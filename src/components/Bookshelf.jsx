import React from 'react'
import '../App.css'

function Bookshelf() {

const [books, setBooks] = React.useState([
  { title: 'The Wind Up Bird Chronicles', author: 'Haruki Murakami'},
  { title: 'Caliban and the Witch', author: "Silvia Federici"}
])

const [currentBook, setCurrentBook] = React.useState({
    title: "",
    author: ""
  })

function handleNameChange(e) {
  const newCurrentBook = structuredClone(currentBook)
  newCurrentBook.title = e.target.value
  setCurrentBook(newCurrentBook)
  
}

function handleAuthorChange(e) {
  const newCurrentAuthor = structuredClone(currentBook)
  newCurrentAuthor.author = e.target.value
  setCurrentBook(newCurrentAuthor)
  // console.log(newCurrentAuthor);
}

function handleSubmit(e) {
  console.log("clicked");
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


return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <input
      placeholder="Add book title"
      type="text"
      onChange={handleNameChange}
      value={currentBook.title}
      />
      <input
      placeholder="Add author name"
      type="text"
      onChange={handleAuthorChange}
      value={currentBook.author}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => {
    return <div className="bookCard" key={index}>"{book.title}" by <em>{book.author}</em></div>
  })}</div>
</div>
)
}

export default Bookshelf