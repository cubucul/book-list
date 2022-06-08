import BookItem from '../book-item';
import type { Book } from '../../types/book';

type BookListProps = {
  books: Book[];
  removeBook: (id: number) => void;
};

const BookList = ({
  books,
  removeBook
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
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
