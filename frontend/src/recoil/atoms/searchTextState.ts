import { atom } from 'recoil';

export const searchTextState = atom<string>({
  key: 'search-text',
  default: ''
});
