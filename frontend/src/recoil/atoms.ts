import { atom } from 'recoil';
import { SearchMode, Query } from '../types';

export const queryState = atom<Query>({
  key: 'search-text',
  default: {
    mode: SearchMode.ALL,
    value: ''
  }
});

export const currentPageState = atom({
  key: 'pagination',
  default: 1
});
