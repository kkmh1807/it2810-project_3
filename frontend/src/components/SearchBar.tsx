import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { queryState, currentPage } from '../recoil/atoms';
import { SearchMode, SearchModeValues } from '../types';
import '../styles/SearchBar.css';
import React from 'react';

// TODO: get options from database
const genres = ['Horror', 'Comedy'];

const SearchBar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useRecoilState(queryState);
  const [queryMode, setQueryMode] = useState(query.mode);
  const [queryValue, setQueryValue] = useState(query.value);
  const [currentpage, setCurrentpage] = useRecoilState(currentPage);

  const changeQuery = (e: string) => {
    setQueryMode(e as SearchMode);
    setCurrentpage(1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') {
        setCurrentpage(1);
        return;
      }
      buttonRef.current?.focus();
      setQuery({ mode: queryMode, value: queryValue });
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  return (
    <section role="search" className="search-bar">
      <select className="search-mode-dropdown" defaultValue={queryMode} onChange={(e) => changeQuery(e.target.value)}>
        {Object.values(SearchMode).map((mode) => (
          <option key={mode} value={mode}>
            {SearchModeValues[mode]}
          </option>
        ))}
      </select>
      {queryMode === SearchMode.GENRE ? (
        <select className="search-genre-dropdown" defaultValue={queryValue} onChange={(e) => setQueryValue(e.target.value)}>
          <option disabled hidden value="">
            Select genre...
          </option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      ) : (
        <input className="search-field" placeholder="Search..." value={queryValue} onChange={(e) => setQueryValue(e.target.value)} />
      )}
      <button ref={buttonRef} className="search-button" onClick={() => setQuery({ mode: queryMode, value: queryValue })}>
        <img src="assets/search-icon.svg" alt="Search" />
      </button>
    </section>
  );
};

export default SearchBar;
