import React, { lazy,Suspense } from 'react';
import { Switch,Route } from 'react-router-dom';
// import Blank from './layouts/blank/Blank';
const Black = lazy(()=> import('./layouts/black/Black'));

// import Full from './layouts/full/Full';
const Full = lazy(()=> import('./layouts/full/Full'));


const App = () => {
  return ( <>
  
  <Suspense fallback={<p>Loading.....</p>}>
  <Switch>
  <Route path="/secured">
      <Full/>
    </Route>

    <Route path="/">
      <Black/>
    </Route>

  </Switch>
  </Suspense>
  </> );
}
 export default App;