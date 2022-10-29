import { startTransition, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { queryState, currentPageState } from '../recoil/atoms';
import { SearchMode, SearchModeValues } from '../types';
import { genresSelector } from '../recoil/selectors';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useRecoilState(queryState);
  const [queryMode, setQueryMode] = useState(query.mode);
  const [queryValue, setQueryValue] = useState(query.value);
  const [, setCurrentpage] = useRecoilState(currentPageState);

  const changeQuery = () => {
    startTransition(() => {
      setQuery({ mode: queryMode, value: queryValue });
      setCurrentpage(1);
    });
  };

  const genres = useRecoilValue(genresSelector);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') {
        return;
      }
      buttonRef.current?.focus();
      changeQuery();
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  return (
    <section role="search" className="search-bar">
      <select className="search-mode-dropdown" defaultValue={queryMode} onChange={(e) => setQueryMode(e.target.value as SearchMode)}>
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
      <button ref={buttonRef} className="search-button" onClick={() => changeQuery()}>
        <img src="assets/search-icon.svg" alt="Search" />
      </button>
    </section>
  );
};

export default SearchBar;
