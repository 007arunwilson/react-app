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
          A React Tick Tac Toe game.
        </p>

        <hr class="hr-seperator" />

        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>

      </div>
    );
  }
}


class Square extends React.Component {
  render() {
    return (
      <button data-squareid={this.props.value} className="square" onClick={(e) => alert(e)} >
        
      </button>
    );
  }
}


class Board extends Component {

  renderSquare(i){
    return <Square value={i} />;
  }

  render() {

    const status = 'Next player: X';

    return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );

    }
  }

export default App;
