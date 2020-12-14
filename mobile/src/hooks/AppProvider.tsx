import React, { PropsWithChildren } from 'react';

import { SearchProvider } from './search';
import { FavoritePokemonsProvider } from './favoritePokemons';

const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <SearchProvider>
      <FavoritePokemonsProvider>{children}</FavoritePokemonsProvider>
    </SearchProvider>
  );
};

export default AppProvider;
