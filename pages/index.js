import React from 'react'
import fetch from 'node-fetch'
import parser from 'fast-xml-parser'
import Book from '../components/book.js'
import Shelf from '../components/shelf.js'
import getPropsForBook from '../utils/props-for-book.js'

function fetchBookData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then((body) => {
        let data = parser.parse(body).GoodreadsResponse.book
        resolve(data)
      })
  })
}

function Main({ data }) {
  let bookElements = []
  data.map((book, i) => {
    let bookProps = getPropsForBook(book)  
    bookProps.key = i
    bookElements.push(
      <Book {...bookProps} />
    )
  })

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
  let books = query.books.split(',')

  let data = await Promise.all(books.map((book) => {
    return fetchBookData(`https://www.goodreads.com/book/show?key=QGHu6iuqWMeKlxaETriDXQ&id=${book}`)
  }))

  return { props: { data }}
}

export default Main
