import { useState } from 'react';
import type { Book } from '../../types/book';
import TextField from '../text-field';

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
    <div>
      { isEditable ?
        <TextField
          value={editedTitle}
          onChange={(event) => setEditedTitle(event.target.value)}
          placeholder="Заголовок"
        />
        :
        <h2>{title}</h2>
      }
      { isEditable ?
        <TextField
          value={editedAuthor}
          onChange={(event) => setEditedAuthor(event.target.value)}
          placeholder="Автор"
        />
        :
        <p>{author}</p>
      }
      <button
        type="button"
        onClick={onEditBook}
      >{editButtonText}</button>
      <button
        type="button"
        onClick={onRemoveBook}
      >Удалить</button>
    </div>
  );
};

export default BookItem;
