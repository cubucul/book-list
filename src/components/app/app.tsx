import { useState } from 'react';
import BookForm from '../book-form';
import BookList from '../book-list';
import type { Book } from '../../types/book';
import './app.css';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setBooks((prevBooks) => {
      return [
        book,
        ...prevBooks
      ];
    });
  };

  const removeBook = (id: number) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
  };

  const editBook = (editedBook: Book) => {
    setBooks((prevBooks) => {
      return prevBooks.map((book) => {
        if (book.id === editedBook.id) {
          return editedBook;
        }

        return book;
      });
    });
  };

  return (
    <main className="app">
      <BookForm
        addBook={addBook}
      />
      {
        books.length ?
          <BookList
            books={books}
            removeBook={removeBook}
            editBook={editBook}
          />
          :
          <p>Список книг пуст.</p>
      }
    </main>
  );
};

export default App;
