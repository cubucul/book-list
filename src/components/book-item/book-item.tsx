import { useState } from 'react';
import Button from '../button';
import TextField from '../text-field';
import type { Book } from '../../types/book';
import './book-item.css';

type BookItemProps = {
  book: Book;
  removeBook: (id: number) => void;
  editBook: (book: Book) => void;
};

const BookItem = ({
  book,
  removeBook,
  editBook
}: BookItemProps) => {
  const { id, title, author } = book;
  const [isEditable, setIsEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAuthor, setEditedAuthor] = useState(author);

  const editButtonText = isEditable ? 'Сохранить' : 'Редактировать';

  const onRemoveBook = () => removeBook(id);

  const onEditBook = () => {
    if (!isEditable) {
      setIsEditable(true);
    } else {
      editBook({ id, title: editedTitle, author: editedAuthor });
      setIsEditable(false);
    }
  };

  return (
    <div className="book-item">
      <div className="book-item__content">
        { isEditable ?
          <TextField
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            placeholder="Заголовок"
          />
          :
          <h2 className="book-item__title">{title}</h2>
        }
        { isEditable ?
          <TextField
            value={editedAuthor}
            onChange={(event) => setEditedAuthor(event.target.value)}
            placeholder="Автор"
          />
          :
          <p className="book-item__author">{author}</p>
        }
      </div>
      <div className="book-item__controls">
        <Button theme="blue" onClick={onEditBook}>{editButtonText}</Button>
        <Button theme="red" onClick={onRemoveBook}>Удалить</Button>
      </div>
    </div>
  );
};

export default BookItem;
