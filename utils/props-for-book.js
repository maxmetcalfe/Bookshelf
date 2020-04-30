
// Title
function getTitle(book) {
  if (book.title.indexOf('(') > -1) {
    return book.title.split('(')[0]
  }
  
  if (book.title.indexOf(':') > -1) {
    return book.title.split(':')[0]
  }

  return book.title
}

// Authors
function getAuthors(book) {
  let authors = ''
  let spacer = ''
  let role = ''
  if (book.authors.author.name) {
    authors = book.authors.author.name
  } else {
    book.authors.author.map((author, i) => {
      spacer = i === 0 ? '' : ', '
      role = author.role || ''
      authors += spacer + author.name + (author.role ? ' (' + author.role + ')' : '')
    })
  }
  return authors;
}

// Height
// Rough proporations from https://en.wikipedia.org/wiki/Book_size.
function getHeight(book) {
  const FOLLO = 200
  const QUARTO = 158
  const OCTAVO = 97
  const TWELVE = 80
  const SIXTEEN = 64

  if (book.num_pages > 500) {
    return book.num_pages % 2 == 0 ? FOLLO : OCTAVO;
  }

  if (book.num_pages > 300) {
    return book.num_pages % 2 == 0 ? QUARTO : TWELVE;
  }

  if (book.num_pages > 200) {
    return book.num_pages % 2 == 0 ? OCTAVO : SIXTEEN;
  }
  if (book.num_pages > 100) {
    return book.num_pages % 2 == 0 ? TWELVE : SIXTEEN;
  }

  return SIXTEEN
}

// Width
function getWidth(book) {
  if (!book.num_pages) {
    return "20px"
  }

  return book.num_pages / 20 + "px"
}

function getMargin(book) {
  return '1px'
}

// Font size
function getFontSize(title, height) {
  if (title.length > 20 || height < 170) {
    return '5px'
  }

  return '15px'
}

// Font color
function getColor(book) {
  if (book.num_pages % 2 === 0) {
    return 'white'
  }
  return 'black'
}

// Font family
function getFontFamily(book) {
  if (book.title[0] < 10) {
    return '\'Sedgwick Ave Display\', cursive'
  }

  if (book.title[3] < 20) {
    return '\'Rock Salt\', cursive'
  }

  return '\'Cousine\', monospace'
}

// Background color
function getBackgroundColor(book) {
  if (book.publication_year < 1990) {
    return 'rgb(245, 205, 0)'
  }

  if (book.publication_year < 1995) {
    return 'rgb(0, 140, 255)'
  }

  if (book.publication_year < 2004) {
    return 'rgb(0, 170, 30)'
  }

  if (book.publication_year < 2015) {
    return 'rgb(255, 79, 0)'
  }

  return 'rgb(78, 78, 78)'
}

function getPropsForBook(book) {
  let height = getHeight(book);
  let title = getTitle(book);
  let titleClassName = title.length > 20 ? 'title' : 'title-vertical';

  return {
    title: title,
    authors: getAuthors(book),
    height: height + 'px',
    width: getWidth(book),
    margin: getMargin(book),
    color: getColor(book),
    backgroundColor: getBackgroundColor(book),
    fontSize: getFontSize(title, height),
    fontFamily: getFontFamily(book),
    titleClassName: titleClassName,
    link: book.link
  }
}

export default getPropsForBook
