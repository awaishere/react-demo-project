import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './Routes/Routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Provider store={store}>
      <Container fluid className="pl-0 pr-0 justify-content-center">
        <div>
          <ToastContainer position="top-center" autoClose={3000} />
          <Route />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
