import { useState } from 'react';
import BookForm from '../book-form';
import BookList from '../book-list';
import type { Book } from '../../types/book';
import './app.css';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <main className="app">
      <BookForm />
      {
        books.length ?
          <BookList books={books} />
          :
          <p>Список книг пуст.</p>
      }
    </main>
  );
};

export default App;
