import React, {Component} from 'react';
import styles from './Todos.css';

class Todos extends Component 
{
  state = {
    todos: []
  };
  async componentDidMount() {
    return fetch('http://localhost:8000/api/todos/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        todos: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
   handleDelete(id: number) {
        alert("Task Completed!");
        return
	      fetch('http://localhost:8000/api/todos/' + id, { method: 'delete' })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            todos: responseJson
          });
        })
        .catch((error) => {
          console.error(error);
        });
}
  render()
  {
    const {todos} = this.state
    return (
      <div ClassName="Container ">
       <h1 className="Header"> Tasks to complete </h1>
        {todos.map(todo =>
            <div className="row outer-Container">
                <div key={todo.id} className="col-6 Todo">
                    <h5>{todo.title}</h5>
                    <p>{todo.description}</p>
                </div>
                <div className="col-4">
                    <button type="button" className="btn-primary btnRemove">X</button>
                </div>
            </div>
        )}
        <button type="button" className="btn-primary btnAdd">Add</button>
      </div>
    );
  }
}

export default Todos;