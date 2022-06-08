import BookItem from '../book-item';
import type { Book } from '../../types/book';
import './book-list.css';

type BookListProps = {
  books: Book[];
  removeBook: (id: number) => void;
  editBook: (book: Book) => void;
};

const BookList = ({
  books,
  removeBook,
  editBook,
}: BookListProps) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id} className="book-list__item">
              <BookItem
                book={book}
                removeBook={removeBook}
                editBook={editBook}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
