import React from 'react';
import { useRecoilState } from 'recoil';
import { currentPage } from '../recoil/atoms';
import ChevronLeft from '../assets/chevron_left.svg';
import ChevronRight from '../assets/chevron_right.svg';
import DoubleArrowLeft from '../assets/double_arrow_left.svg';
import DoubleArrowRight from '../assets/double_arrow_right.svg';
import '../styles/Pagination.css';

const Pagination = (props: { totalPages: number }) => {
  const [currentpage, setCurrentpage] = useRecoilState(currentPage);

  return (
    <div className="pagination-container">
      <button disabled={currentpage === 1} className="pagination-button" onClick={() => setCurrentpage(1)}>
        <img src={DoubleArrowLeft}></img>
      </button>
      <button disabled={currentpage === 1} className="pagination-button" onClick={() => setCurrentpage(currentpage - 1)}>
        <img src={ChevronLeft}></img>
      </button>
      <div className="pagination-text">
        {currentpage} of {props.totalPages}
      </div>
      <button disabled={currentpage === props.totalPages} className="pagination-button" onClick={() => setCurrentpage(currentpage + 1)}>
        <img src={ChevronRight}></img>
      </button>
      <button disabled={currentpage === props.totalPages} className="pagination-button" onClick={() => setCurrentpage(props.totalPages)}>
        <img src={DoubleArrowRight}></img>
      </button>
    </div>
  );
};

export default Pagination;
