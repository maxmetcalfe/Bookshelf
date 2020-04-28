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
        let data = parser.parse(body).GoodreadsResponse;
        if (data.author) {
          resolve(data.author.books.book);
        } else {
          resolve(data.book)
        }
      })
  })
}

function Main({ data, error }) {
  if (error) {
    return (
      <div>
        <h1>{error.msg}</h1>
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
      <link href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@1,700&family=Rock+Salt&family=Satisfy&family=Sedgwick+Ave+Display&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <div>
          <style jsx>{`
            div {
              margin: 50px 5%;
            }
          `}</style>
          {bookElements}
        </div>
      </div>
  )
}


export const getServerSideProps = async ({ query }) => {
  let data

  if (!query.books && !query.author) {
    return { props: { error: { msg: `No book IDs or author ID provided.` } }}
  }

  if (query.books) {
    let books = query.books.split(',')
    data = await Promise.all(books.map((book) => {
      return fetchBookData(`https://www.goodreads.com/book/show?key=QGHu6iuqWMeKlxaETriDXQ&id=3892`)
    }))
  } else if (query.author) {
    // Only fetch the first page for now.
    data = await fetchBookData(`https://www.goodreads.com/author/list/${query.author}?key=QGHu6iuqWMeKlxaETriDXQ`)
  }

  return { props: { data }}
}

export default Main
