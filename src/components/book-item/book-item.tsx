import type { Book } from '../../types/book';

type BookItemProps = {
  book: Book;
  removeBook: (id: number) => void;
};

const BookItem = ({
  book,
  removeBook
}: BookItemProps) => {
  const { id, title, author } = book;

  const onRemoveBook = () => removeBook(id);

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        type="button"
      >Редактировать</button>
      <button
        type="button"
        onClick={onRemoveBook}
      >Удалить</button>
    </div>
  );
};

export default BookItem;
