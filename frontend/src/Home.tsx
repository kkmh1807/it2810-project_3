import React from 'react';
import { useRecoilValue } from 'recoil';
import Pagination from './components/Pagination';
import { getAllMovies } from './recoil/selectors';
import './styles/HomeLogo.css';
import { Movie } from './types';

interface PageInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
interface MovieResponse {
  data: Movie[];
  pageInfo: PageInfo;
}

const Home = () => {
  const movies: MovieResponse = useRecoilValue(getAllMovies);

  return (
    <>
      <div className="home-logo">
        <img src="assets/Icon.svg" alt="MovieFinder logo" />
        <h1>MovieFinder</h1>
        <h2>Find your movie!</h2>
      </div>
      {movies.data.map((movie: Movie) => (
        <div key={movie._id}>
          <div>{movie.Series_Title}</div>
          <img src={movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
        </div>
      ))}
      <Pagination totalPages={movies.pageInfo.totalPages} />
    </>
  );
};

export default Home;
