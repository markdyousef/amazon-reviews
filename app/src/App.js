import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Recommended from './components/Recommended'
import Model from './components/Model';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Main from './components/Main';

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Main>
        <Route exact path="/" component={Recommended}/>
        <Route path="/model" component={Model} />
      </Main>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App;
