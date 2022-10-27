import Header from './Header';
import MovieList from './components/MovieList';
import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;
