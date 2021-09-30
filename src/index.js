import React from 'react';
import ReactDOM from 'react-dom';
import { reducer, initialState } from './Context/reducer';
import { StateProvider } from './Context/StateProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
