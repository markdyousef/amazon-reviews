import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import Recommended from './components/Recommended'
import Model from './components/Model';
import Reviews from './components/Reviews';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Main>
        <Route exact path="/" component={Recommended}/>
        <Route path="/model" component={Model} />
        <Route path="/reviews" component={Reviews} />
      </Main>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App;
