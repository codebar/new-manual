import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalstyle/GlobalStyle';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Sponsors from "./components/Sponsors/Sponsors";


function App() {
  return (
    <>
      <GlobalStyle>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} exact={true} />
            <Route path="/sponsors" component={Sponsors} />
          </Switch>
        </BrowserRouter>
      </GlobalStyle>
    </>
  );
}

export default App;
