import React from 'react';
import 'App.css';
import Router from 'pages/router';
import store from 'store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
