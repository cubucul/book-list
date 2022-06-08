import { FormEvent, useState, ChangeEvent } from 'react';
import TextField from '../text-field';
import Button from '../button';
import type { Book } from '../../types/book';
import './book-form.css';
import BookCover from '../book-cover';

type BookFormProps = {
  addBook: (book: Book) => void;
};

const BookForm = ({
  addBook
}: BookFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');

  const getBase64 = (file: Blob) => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log(error);
      };
    });
  };

  const onLoadCover = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    const base64 = await getBase64(file);

    if (base64) {
      setCover(base64 as string);
    }
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    addBook({ id: Date.now(), title, author, cover });
    setTitle('');
    setAuthor('');
    setCover('');
  };

  return (
    <form
      className="book-form"
      onSubmit={onSubmitForm}
    >
      <input
        type="file"
        onChange={onLoadCover}
      />
      {
        cover &&
          <BookCover src={cover} alt={title} />
      }
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
      <Button
        type="submit"
        disabled={title === '' || author === ''}
      >Добавить книгу</Button>
    </form>
  );
};

export default BookForm;
