import React, { PropsWithChildren } from 'react';

import { SearchProvider } from './search';

const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default AppProvider;
