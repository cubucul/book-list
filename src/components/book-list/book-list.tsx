import BookItem from '../book-item';
import type { Book } from '../../types/book';

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
    <ul>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
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
