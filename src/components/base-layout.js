import React, { Component } from 'react';

import Header from './header.js';
import Footer from './footer.js';
import ParentComponent from './form.js';
import DisplayComponent from './message.js';


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <ParentComponent />
      <DisplayComponent />
      <Footer />
      </div>
    );
  }
}
