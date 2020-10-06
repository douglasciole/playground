import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import Checklist from './components/Checklist';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPaw } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

library.add(faTrash);
library.add(faPaw);

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checklist" component={Checklist} />
          <Route path="/pokemon" component={Pokemon} />
        </Switch>
    </Router>
  );
}

export default App;
