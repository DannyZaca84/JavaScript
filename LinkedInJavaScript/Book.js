class Book {
  constructor(
    name,
    pages,
    color,
    author,
    hardCover,
    paperCover,
    rented,
    owned
  ) {
    this.name = name;
    this.pages = pages;
    this.color = color;
    this.author = author;
    this.cover = {
      hard: hardCover,
      paper: paperCover,
    };
    this.rented = rented;
    this.owned = owned;
  }
  coverStyle(bookCover) {
    this.cover = bookCover;
  }
} // End of class Book

export default Book;
