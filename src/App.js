import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Tool_bar from './Tool_bar'
import About_us from './About_us'
import 'bootstrap/dist/css/bootstrap.min.css';
import TandC from './TandC'
import Privacypolicy from './Privacypolicy'
import FAQ from './FAQ'
import Contact from './Contact'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">

        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/gamepitara" component={Home} />
          <Route exact path="/about_us" component={About_us} />
          <Route exact path="/tandc" component={TandC} />
          <Route exact path="/privacy_policy" component={Privacypolicy} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact_us" component={Contact} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;