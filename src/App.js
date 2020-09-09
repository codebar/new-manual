import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalstyle/GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About';
import Sponsors from './components/Pages/Sponsors/Sponsors';
import Landing from './components/Pages/Landing/Landing';
import Mailing from './components/Pages/MailingList/MailingList';
import Organisers from './components/Pages/Organisers/Organisers';
import Coordinators from './components/Pages/Coordinators/Coordinators';
import CodebarArea from './components/Pages/CodebarArea/CodebarArea';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <GlobalStyle>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" component={Landing} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/organisers" component={Organisers} />
            <Route path="/coordinators" component={Coordinators} />
            <Route path="/mailing-list" component={Mailing} />
            <Route path="/codebar-area" component={CodebarArea} />
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </GlobalStyle>
    </>
  );
}

export default App;
