
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactDOM } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './helpers/setAuthToken';
import { loadUser } from './actions/auth';
import Welcome from './components/layout/Welcome';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
   useEffect (()=>{
      store.dispatch(loadUser())
   },[]);
    
  return (
    <>
     <Provider store={store}>
       <Router>
          <Navbar />
          <Home />
          <Routes>
            <Route path="/register" element={<Register />}> </Route>
            <Route exact path="/login" element={<Login />}> </Route>
            <Route path="/welcome" element={<Welcome />}> </Route>
          </Routes>

        </Router> 
     </Provider>
       

    </>

  );
}
export default App;