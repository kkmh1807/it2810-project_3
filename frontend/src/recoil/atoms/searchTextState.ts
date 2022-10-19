import { atom } from 'recoil';

export const searchTextState = atom({
  key: 'search-text',
  default: ''
});

export const currentPage = atom({
  key: 'pagination',
  default: 1
});
