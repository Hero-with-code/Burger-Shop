import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


function App() {
  return ( 
    <>

    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

    </Router>

    </>
  );
}

export default App;
