import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './base-layout.js';
import Header from './header.js';
import Footer from './footer.js';
import ParentComponent from './form.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
        <Header />
        <Footer />
        </BaseLayout>
        <ParentComponent />

      </div>
    );
  }
}


export default App;
