import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth/Auth.provider';
import HomePage from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import FavoritePage from '../../pages/Favorite/Favorite';
import FavoriteVideoPage from '../../pages/FavoriteVideo/FavoriteVideo';
import VideoPage from '../../pages/Video/Video';
import Private from '../Private/Private';
import Header from '../Header/Header';
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
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private exact path="/favorites">
              <FavoritePage theme={themeReducer.mode} />
            </Private>
            <Private exact path="/favorites/:id">
              <FavoriteVideoPage theme={themeReducer.mode} />
            </Private>
            <Route path="/:id">
              <VideoPage />
            </Route>            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </AuthProvider>
    </BrowserRouter>
  
  );
}

export default App;