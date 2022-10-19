export enum SearchMode {
  ALL = 'ALL',
  TITLE = 'TITLE',
  GENRE = 'GENRE',
  ACTOR = 'ACTOR'
}

export const SearchModeValues: Record<SearchMode, string> = {
  ALL: 'All',
  TITLE: 'Title',
  GENRE: 'Genres',
  ACTOR: 'Actior'
};

export interface Query {
  mode: SearchMode;
  text: string;
}
