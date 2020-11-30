import React, { PropsWithChildren } from 'react';

import { PokemonProvider } from './pokemon';

const AppProvider: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default AppProvider;
