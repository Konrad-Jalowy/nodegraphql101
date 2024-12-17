const books = [
    {
      id: "1",
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id: "2",
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

exports.getAllBooks = function(){
    return books;
};

exports.getBookById = function(id){
    return books.find((book) => {
        return book.id === id;
      });
};
