import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import FavoritePage from '../../pages/Favorite';
import FavoriteVideoPage from '../../pages/FavoriteVideo';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Header from '../Header';
import { useSelector } from 'react-redux';


function App() {
  const themeReducer = useSelector((state) => state.themeReducer);
  
  const themeStyle = `
    background-color: ${ themeReducer.mode == 'dark' ? '#303030;' : 'white;' }
    color: ${ themeReducer.mode == 'dark' ? '#fff' : '#1f1f1f' };
  `;

  const { body } = document;
  body.style = themeStyle;

  return (
    
    <BrowserRouter>   
    
    <AuthProvider>   
      <Header />  
        <Layout>        
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>           
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/favorites">
              <FavoritePage theme={themeReducer.mode} />
            </Route>
            <Private exact path="/favorites/:id">
              <FavoriteVideoPage theme={themeReducer.mode} />
            </Private>
            <Route path="/:id">
              <VideoPage />
            </Route>
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
  
  );
}

export default App;
