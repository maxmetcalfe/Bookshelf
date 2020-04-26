
// Title
function getTitle(book) {
  if (book.title.indexOf("(") > -1) {
    return book.title.split('(')[0]
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
  const FOLLO = 400
  const QUARTO = 316
  const OCTAVO = 199
  const TWELVE = 165
  const SIXTEEN = 132

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
  return book.num_pages / 10 + "px"
}

function getMargin(book) {
  return '1px'
}

// Font size
function getFontSize(book) {
  if (book.title.length > 15) {
    return '12px'
  }

  return '25px'
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

  return '\'Satisfy\', cursive'
}

function getTitlePosition(book) {
  
}

// Background color
function getBackgroundColor(book) {
  if (book.publication_year < 2000) {
    return 'rgba(219, 118, 86, 1.0)'
  }
  
  if (book.publication_year < 2004) {
    return 'rgba(201, 184, 119, 1.0)'
  }
  
  if (book.publication_year < 2008) {
    return 'rgba(81, 67, 142, 1.0)'
  }
  
  if (book.publication_year < 2015) {
    return 'rgba(162, 162, 153, 1.0)'
  }
  
  return 'rgba(233, 234, 189, 1.0)'
}

function getPropsForBook(book) {
  let height = getHeight(book);
  let titlePosition = height / 2;

  return {
    title: getTitle(book),
    authors: getAuthors(book),
    height: height + "px",
    width: getWidth(book),
    margin: getMargin(book),
    color: getColor(book),
    backgroundColor: getBackgroundColor(book),
    fontSize: getFontSize(book),
    fontFamily: getFontFamily(book),
    titlePosition: titlePosition + "px"
  }
}

export default getPropsForBook
