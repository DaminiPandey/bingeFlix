import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import ProfileScreen from '../components/ProfileScreen';

const Routes = () => {
    return (
        <Switch>
            
             <Route
                exact
                path='/'
                component={Home}
            />
              <Route
                exact
                path='/account'
                component={ProfileScreen}
            />
             
          
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
           
           
                
                
            
        </Switch>
    );
}

export default Routes;
