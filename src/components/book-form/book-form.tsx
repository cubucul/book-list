const BookForm = () => {
  return (
    <form>
      <label>
        <input
          type="text"
          placeholder="Заголовок"
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Автор"
        />
      </label>
      <button type="submit">Добавить книгу</button>
    </form>
  );
};

export default BookForm;
