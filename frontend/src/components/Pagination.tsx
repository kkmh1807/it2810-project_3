import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPage } from '../recoil/atoms';
import { getAllMovies } from '../recoil/selectors';
import { Movie } from '../types';
import ChevronLeft from '../assets/chevron_left.svg';

const Pagination = (props: { totalPages: number }) => {
  const [currentpage, setCurrentpage] = useRecoilState(currentPage);

  return (
    <div>
      <button onClick={() => setCurrentpage(currentpage - 1)}>
        <img src={ChevronLeft}}></img>
      </button>
      <button>
        {currentpage}/{props.totalPages}
      </button>
      <button onClick={() => setCurrentpage(currentpage + 1)}>+</button>
    </div>
  );
};

export default Pagination;
