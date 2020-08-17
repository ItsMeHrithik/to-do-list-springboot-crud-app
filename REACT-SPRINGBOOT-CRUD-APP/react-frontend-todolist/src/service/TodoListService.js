import axios from 'axios';

const TODO_API_BASE_URL = "/api/v1/todos";

class TodoListService {

    getTodos() {
        return axios.get(TODO_API_BASE_URL);
    }

    createTodo(todos) {
        return axios.post(TODO_API_BASE_URL, todos);
    }

    getTodoById(todoId) {
        return axios.get(TODO_API_BASE_URL +  "/" + todoId);
    }
    
    updateTodo(todos, todoId) {
        return axios.put(TODO_API_BASE_URL +  "/" + todoId, todos);
    }

    deleteTodo(todoId) {
        return axios.delete(TODO_API_BASE_URL + "/" + todoId);
    }
}

export default new TodoListService()