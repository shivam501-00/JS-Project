
const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age Fiction",
      year: 1951
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Southern Gothic",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      year: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Fiction",
      year: 1925
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      year: 1851
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      year: 1997
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Mystery",
      year: 2003
    }
  ];
/* below code is accessing or filtering out books with gerne as "Fantasy" by using filter method. we are applying filter method on "books" array and accessing each book as "book"*/
  const genre = books.filter((book)=>book.genre === "Fantasy")//explicit calling
//   console.table(genre)

// books after 1950

const year = books.filter((book)=>{
    if(book.year >= 1950){
        return book
    }
})

console.table(year)

//using forEach

const y1 = books.forEach((book)=>{
    if(book.year >= 1950){
        return book
    }
})
console.table(y1) 


books.forEach((book)=>{
  if(book.author=="Jane Austen"){
    // console.log(book)
    //  book.push(ja[0]);
  }
})
// console.log(ja)

const bk1 = books.filter((book)=>{
  if(book.genre==="Fantasy" && book.year < 2000){
    return book
  }
})
console.table(bk1)



