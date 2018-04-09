import React, {Component} from 'react';
import Todos from './components/Todos.js';
import styles from './App.css';

class App extends Component 
{
  render()
  {
    return (
      <div ClassName="Container">
        <Todos />
      </div>
    );
  }
}

export default App;