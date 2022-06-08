import type { Book } from '../types/book';

const storageKey = 'book-list';

export const load = (): Book[] | null => {
  const booksData = localStorage.getItem(storageKey);

  if (booksData) {
    return JSON.parse(booksData);
  }

  return null;
};

export const save = (books: Book[]) => {
  localStorage.setItem(storageKey, JSON.stringify(books));
};
