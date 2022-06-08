import { FormEvent, useState } from 'react';
import type { Book } from '../../types/book';

type BookFormProps = {
  addBook: (book: Book) => void;
};

const BookForm = ({
  addBook
}: BookFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Заголовок"
        />
      </label>
      <label>
        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="Автор"
        />
      </label>
      <button type="submit">Добавить книгу</button>
    </form>
  );
};

export default BookForm;
