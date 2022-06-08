import type { Book } from '../../types/book';

type BookItemProps = {
  book: Book;
};

const BookItem = ({
  book
}: BookItemProps) => {
  const { title, author } = book;

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        type="button"
      >Редактировать</button>
      <button
        type="button"
      >Удалить</button>
    </div>
  );
};

export default BookItem;
