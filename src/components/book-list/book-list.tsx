import BookItem from '../book-item';
import type { Book } from '../../types/book';

type BookListProps = {
  books: Book[];
};

const BookList = ({
  books
}: BookListProps) => {
  return (
    <ul>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
