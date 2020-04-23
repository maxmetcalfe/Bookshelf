import React from 'react'
import fetch from 'node-fetch'
import Book from '../components/book.js'
import Shelf from '../components/shelf.js'
import getPropsForBook from '../utils/props-for-book.js'

function Main({ books }) {
  let bookElements = []
  books.map((book, i) => {
    let bookProps = getPropsForBook(book)  
    bookProps.key = i
    bookElements.push(
      <Book {...bookProps} />
    );
  });

  return (
    <div>
      <div id='book-container'>
        {bookElements}
      </div>
      <Shelf/>
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/data?books=${query.books}`)
  const books = await res.json()
  return { props: { books } }
}

export default Main
