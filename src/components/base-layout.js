import React, { Component } from 'react';

import Header from './header.js';
import Footer from './footer.js';


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Footer />
      </div>
    );
  }
}
