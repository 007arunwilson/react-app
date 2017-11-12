import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sociallinks/>
      </div>
    );
  }
}


class Sociallinks extends React.Component {

  render(){

     var social_link_values = {
         data: 
         [
            {
               "link":"http://web.whatsapp.com",
               "text":"Whatspp"
            },
            {
               "link":"http://instagram.com",
               "text":"Instagram"
            },
            {
               "link":"http://facebook.com",
               "text":"Facebook"
            }
         ]
      }

    return React.createElement('div', {className: 'shopping-list'},
      React.createElement('h1',[],'Social Links'),
      React.createElement('ul',[],
       social_link_values.data.map(function(element_,i) {
        return React.createElement('div', {className: 'social-link-li'},element_.text)})
      )
    );

  }

}

export default App;
