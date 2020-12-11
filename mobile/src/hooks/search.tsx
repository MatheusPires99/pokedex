import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';

interface SearchContextData {
  isSearching: boolean;
  handleToggleSearch: () => void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleToggleSearch = useCallback(() => {
    setIsSearching(!isSearching);
  }, [isSearching]);

  return (
    <SearchContext.Provider value={{ isSearching, handleToggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  return context;
}
