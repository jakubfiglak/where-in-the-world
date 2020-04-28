import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StateProvider } from './context/GlobalState';
import RootView from './views/Root';
import DetailsPage from './views/DetailsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Switch>
          <Route exact path="/" component={RootView} />
          <Route path="/countries" component={DetailsPage} />
        </Switch>
      </StateProvider>
    </BrowserRouter>
  );
};

export default App;
