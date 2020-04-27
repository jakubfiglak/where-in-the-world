import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StateProvider } from './context/GlobalState';
import RootView from './views/RootView';
import DetailsView from './views/DetailsView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Switch>
          <Route exact path="/" component={RootView} />
          <Route path="/countries" component={DetailsView} />
        </Switch>
      </StateProvider>
    </BrowserRouter>
  );
};

export default App;
