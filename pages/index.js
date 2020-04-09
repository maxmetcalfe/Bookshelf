import React from 'react'
import fetch from 'node-fetch'

var parser = require('fast-xml-parser');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(body => resolve(body))
  })
}

const MainComponent = (props) => {
  let books = props.GoodreadsResponse.search.results.work;
  let bookElements = [];
  
  for (let i = 0; i < books.length; i++) {
    bookElements.push(
      <div class="book">
        {books[i].best_book.title}
      </div>
    );
  }

  return (
    <div>
      {bookElements}
    </div>
  )
}

MainComponent.getInitialProps = async () => {
  let xmlData = await fetchData("https://www.goodreads.com/search.xml?key=P89RUgLvpIk3VVqzk54Kcw&q=Ender%27s+Game");
  let data = parser.parse(xmlData);

  return parser.parse(xmlData);
}

export default MainComponent
