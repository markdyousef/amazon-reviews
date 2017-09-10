import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Recommended from './components/Recommended'

const App = () => (
  <MuiThemeProvider>
    <Recommended />
  </MuiThemeProvider>
)

export default App;
