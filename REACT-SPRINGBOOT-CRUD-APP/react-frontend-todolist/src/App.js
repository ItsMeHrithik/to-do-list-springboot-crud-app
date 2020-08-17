import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoListComponent from './components/TodoListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateToDoComponent from './components/CreateToDoComponent';
import UpdateTodoComponent from './components/UpdateTodoComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={TodoListComponent}></Route>
            <Route path="/todoList" component={TodoListComponent}></Route>
            <Route path="/add-todo" component={CreateToDoComponent}></Route>
            <Route path="/update-todo/:id" component={UpdateTodoComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
