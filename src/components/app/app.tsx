import BookForm from '../book-form';
import BookList from '../book-list';
import './app.css';

const App = () => {
  return (
    <main className="app">
      <BookForm />
      <BookList />
    </main>
  );
};

export default App;
