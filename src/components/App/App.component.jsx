import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Header from '../Header';
import { random } from '../../utils/fns';
import {Provider} from 'react-redux';
import store from '../../store/store';

function App() {

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>   
    <Header />
   
    <AuthProvider>     
        <Layout>        
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>           
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private path="/:id">
              <VideoPage />
            </Private>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
     </Provider>
  );
}

export default App;
