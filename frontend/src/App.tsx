import logo from './logo.svg';
import { useRecoilValue } from 'recoil';
import { getAllMovies } from './recoil/selectors';
import './App.css';

function App() {
  const movies = useRecoilValue(getAllMovies);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {movies.map((movie) => (
          <div key={movie._id}>
            <div>{movie.Series_Title}</div>
            <img src={movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
