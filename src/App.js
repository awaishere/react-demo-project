import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './Routes/Routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
