import React, { Component } from 'react';
import TodoListService from '../service/TodoListService';

class CreateToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: '',
            date: ''
        }
        this.changeTaskNameHandler = this.changeTaskNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveTodo = this.saveTodo.bind(this);

    }

    saveTodo = (e) => {
        e.preventDefault();
        let todos = { todo: this.state.todo, date: this.state.date };
        console.log("output" + JSON.stringify(todos));

        TodoListService.createTodo(todos).then(res =>{
            this.props.history.push("/todoList");
        });
    }

    changeTaskNameHandler = (e) => {
        this.setState({ todo: e.target.value });
    }

    changeDateHandler = (e) => {
        this.setState({ date: e.target.value });
    }



    cancel = (e) => {
        this.props.history.push("/todoList");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offest-md-3">
                            <h3 className="text-center">Add Your Todo</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Task Name</label>
                                        <input placeholder="Task Name" name="todo" className="form-control"
                                            value={this.state.todo} onChange={this.changeTaskNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Date :</label>
                                        <input placeholder="Date" name="date" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveTodo}>Add</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "20px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateToDoComponent;