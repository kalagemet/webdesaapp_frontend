import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {routes} from'./Routes';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <Switch> 
            {routes.map((route,i) => 
              <Route key={i} exact={route.subRoutes.some(r=>r.exact)} path={route.subRoutes.map(r=>r.path)}>
                <route.layout>
                  <Switch>
                    {route.subRoutes.map((subRoute,i) => 
                      <Route exact key={i} {...subRoute} />
                    )}
                  </Switch>
                </route.layout>
              </Route>
            )}
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App