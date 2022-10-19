import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { queryState } from '../recoil/atoms';
import { SearchMode, SearchModeValues } from '../types';
import '../styles/SearchBar.css';

// TODO: get options from database
const genres = ['Horror', 'Comedy'];

const SearchBar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useRecoilState(queryState);
  const [searchMode, setSearchMode] = useState(query.mode);
  const [searchText, setSearchText] = useState(query.text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      buttonRef.current?.focus();
      setQuery({ mode: searchMode, text: searchText });
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  return (
    <section role="search" className="search-bar">
      <select className="search-mode-dropdown" defaultValue={searchMode} onChange={(e) => setSearchMode(e.target.value as SearchMode)}>
        {Object.values(SearchMode).map((mode) => (
          <option key={mode} value={mode}>
            {SearchModeValues[mode]}
          </option>
        ))}
      </select>
      {searchMode === SearchMode.GENRE ? (
        <select className="search-genre-dropdown" defaultValue={searchText} onChange={(e) => setSearchText(e.target.value)}>
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
        <input className="search-field" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      )}
      <button ref={buttonRef} className="search-button" onClick={() => setQuery({ mode: searchMode, text: searchText })}>
        <img src="assets/search-icon.svg" alt="Search" />
      </button>
    </section>
  );
};

export default SearchBar;
