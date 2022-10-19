import { atom } from 'recoil';
import { SearchMode, Query } from '../types';

export const queryState = atom<Query>({
  key: 'search-text',
  default: {
    mode: SearchMode.ALL,
    value: ''
  }
});

export const currentPage = atom({
  key: 'pagination',
  default: 1
});
