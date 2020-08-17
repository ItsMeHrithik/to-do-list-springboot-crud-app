import React, { Component } from 'react';
import TodoListService from '../service/TodoListService';


class TodoListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    componentDidMount() {
        TodoListService.getTodos().then((res) => {
            this.setState({ todos: res.data });
        });
    }

    addTodo() {
        this.props.history.push("/add-todo");
    }

    editTodo(id) {
        //using string builder property for id String concatenation
        this.props.history.push(`/update-todo/${id}`);
    }

    deleteTodo(id) {
        TodoListService.deleteTodo(id).then((res) => {
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
        });
    }


    render() {
        return (
            <div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Todo</th>
                                <th>Added On</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.todos.map(
                                    todos =>
                                        <tr key={todos.id}>
                                            <td>{todos.todo}</td>
                                            <td>{todos.date}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editTodo(todos.id)}>Edit</button>
                                                <button className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={() => this.deleteTodo(todos.id)}>Completed</button>
                
                                            </td>


                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default TodoListComponent;