import React from 'react';
import { StateProvider } from './context/GlobalState';
import MainView from './views/MainView';

const App: React.FC = () => {
  return (
    <StateProvider>
      <MainView />
    </StateProvider>
  );
};

export default App;
