import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import React from "react";

const DefaultLayout = React.lazy(() => import('./order-paper/layout/DefaultLayout'));

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;