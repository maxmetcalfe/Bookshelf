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

function Main({ data, error }) {
  if (error) {
    return (
      <div>
        <style jsx>{`
          div {
            height: 100px;
            background-color: rgba(205, 0, 0, 0.1);
            border-radius: 20px;
            border: solid 1px rgba(205, 0, 0, 0.2);
            margin: 20px;
            text-align: center;
            color: rgba(150, 0, 0, 0.9);
            font-family: "Monaco";
          }
        `}</style>
        <h1>Please provide a list of book ids in the query string.</h1>
      </div>
    )
  }

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
  if (!query.books) {
    return { props: { error: { msg: "No books IDs provided." } }}
  }
  let books = query.books.split(',')

  let data = await Promise.all(books.map((book) => {
    return fetchBookData(`https://www.goodreads.com/book/show?key=QGHu6iuqWMeKlxaETriDXQ&id=${book}`)
  }))

  return { props: { data }}
}

export default Main
