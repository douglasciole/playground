import React, { useState } from 'react';
import './App.css';

import Pokemon from './components/pokemon/Pokemon';
import Checklist from './components/checklist/Checklist';
import Chat from './components/chat/Chat';


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
          <Route path="/chat" component={Chat} />
        </Switch>
    </Router>
  );
}

export default App;
