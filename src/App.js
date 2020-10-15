import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { ConsumerProvider } from './context/CunsumerContext';
import Web3Connect from './Components/Web3Connect';


const App = () => {
  return (
    <div className="App">
      <ConsumerProvider>
          <Web3Connect />
          <Header />
          <Main />
          {
            // <footer>
            //   <nav class="navbar fixed-bottom navbar-light bg-light">
            //     <a class="navbar-brand" href="#">Tracebloc</a>
            //   </nav>
            // </footer>
          }
      </ConsumerProvider>
    </div>
  );
}



export default App;
