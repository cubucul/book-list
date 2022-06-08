import { FormEvent, useState } from 'react';
import TextField from '../text-field';
import Button from '../button';
import type { Book } from '../../types/book';
import './book-form.css';

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

    addBook({ id: Date.now(), title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form
      className="book-form"
      onSubmit={onSubmitForm}
    >
      <TextField
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Заголовок"
        label="Заголовок книги"
      />
      <TextField
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        placeholder="Автор"
        label="Автор книги"
      />
      <Button type="submit">Добавить книгу</Button>
    </form>
  );
};

export default BookForm;
