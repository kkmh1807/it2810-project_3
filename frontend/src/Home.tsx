import React, { Suspense, useState } from 'react';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SortingArrows from './assets/sorting_arrows.svg';
import { useRecoilState } from 'recoil';
import { order } from './recoil/atoms';
import './styles/Home.css';
import './styles/Media.css';

const Home = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentorder, setCurrentOrder] = useRecoilState(order);

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
          {totalPages ? (
            <div className="sorting-params">
              <img
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setCurrentOrder(!currentorder)}
                data-cy="sorting-arrows"
                src={SortingArrows}
                onClick={() => setCurrentOrder(!currentorder)}
              />
              {currentorder ? <p>Stigende</p> : <p>Synkende</p>}
            </div>
          ) : (
            <div></div>
          )}
          <MovieList setTotalPages={setTotalPages} />
        </Suspense>
      </main>
      {totalPages ? <Pagination totalPages={totalPages} /> : <div></div>}
    </>
  );
};

export default Home;
