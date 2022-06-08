import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';
import type { Book } from '../../types/book';

describe('App', () => {
  it('добавляет книгу', () => {
    const bookTitle = 'Чистый код';
    const bookAuthor = 'Роберт Мартин';
    render(<App />);
    const titleField = screen.getByPlaceholderText(/заголовок/i);
    const authorField = screen.getByPlaceholderText(/автор/i);
    const submitButton = screen.getByRole('button', {
      name: /добавить книгу/i
    })
    userEvent.type(titleField, bookTitle);
    userEvent.type(authorField, bookAuthor);
    userEvent.click(submitButton);
    expect(screen.getByText(bookTitle)).toBeInTheDocument();
    expect(screen.getByText(bookAuthor)).toBeInTheDocument();
  });

  it('редактирует книгу', () => {
    const bookTitle = 'Чистый код';
    const newBookTitle = 'Выразительный JavaScript';
    const booksMock: Book[] = [
      {
        id: 1,
        title: bookTitle,
        author: 'Роберт Мартин'
      }
    ];
    jest.spyOn(localStorage, 'getItem');
    localStorage.getItem = jest.fn().mockResolvedValue(booksMock);
    render(<App />);
    const editButton = screen.getByRole('button', {
      name: /редактировать/i
    });
    userEvent.click(editButton);
    const titleField = screen.getByDisplayValue(bookTitle);
    userEvent.clear(titleField);
    userEvent.type(titleField, newBookTitle);
    const saveButton = screen.getByRole('button', {
      name: /сохранить/i
    });
    userEvent.click(saveButton);
    expect(screen.getByText(newBookTitle)).toBeInTheDocument();
  });

  it('удаляет книгу', () => {
    const booksMock: Book[] = [
      {
        id: 1,
        title: 'Чистый код',
        author: 'Роберт Мартин'
      }
    ];
    jest.spyOn(localStorage, 'getItem');
    localStorage.getItem = jest.fn().mockResolvedValue(booksMock);
    render(<App />);
    const deleteButton = screen.getByRole('button', {
      name: /удалить/i
    });
    userEvent.click(deleteButton);
    expect(screen.getByText(/список книг пуст/i)).toBeInTheDocument();
  });
});
