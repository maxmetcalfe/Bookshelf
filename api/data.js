const fetch = require("node-fetch");
const parser = require("fast-xml-parser");

function fetchBookData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then((body) => {
        let data = transform(parser.parse(body));
        resolve(data);
      })
  })
}

function transform(raw) {
  return raw.GoodreadsResponse.book;
}

module.exports = (req, res) => {
  let books = req.query.books.split(",");

  if (!books.length) {
    res.send("No books requested.");
  }
  
  console.log(`Fetching ${books.length} books...`);

  Promise.all(books.map((book) => {
    return fetchBookData(`https://www.goodreads.com/book/show?key=P89RUgLvpIk3VVqzk54Kcw&id=${book}`)
  })).then((values) => {
    res.send(values);
  });

}