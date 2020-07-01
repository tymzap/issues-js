import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import AppContainer from './containers/AppContainer';

const App = () => (
  <AppContainer>
    app works
  </AppContainer>
);

ReactDOM.render(<App />, document.getElementById('root'));
