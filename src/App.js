import React from 'react';
import CreateProduct from './pages/CreateProduct'
import ListProduct from './pages/ListProduct'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path="/createproduct" component={CreateProduct} />
        <Route path="/login" component={CreateProduct} />
      </Switch>
    </div>
  );
}

export default App;
