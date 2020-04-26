import React from 'react';
import { StateProvider } from './context/GlobalState';
import RootView from './views/RootView';

const App: React.FC = () => {
  return (
    <StateProvider>
      <RootView />
    </StateProvider>
  );
};

export default App;
