import React, { Suspense, useState } from 'react';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import './styles/Home.css';

const Home = () => {
  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <header className={`home-header ${totalPages ? 'with-content' : ''}`}>
        <div className="home-logo">
          <img className="logo-img" src="assets/Icon.svg" alt="MovieFinder logo" />
          <h1 className="logo-title">MovieFinder</h1>
          <span className="logo-slogan">Find your movie!</span>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
      </header>
      <main className="home-content">
        <Suspense>
          <MovieList setTotalPages={setTotalPages} />
        </Suspense>
      </main>
      {totalPages ? <Pagination totalPages={totalPages} /> : <div></div>}
    </>
  );
};

export default Home;
