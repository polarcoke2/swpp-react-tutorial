import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import Todo from '../../components/Todo/Todo'
import TodoDetail from '../../components/TodoDetail/TodoDetail'
import "./TodoList.css"

class TodoList extends Component {

	state = {
		todos: [
			{id: 1, title: 'SWPP', content: 'take swpp class', done: true},
			{id: 2, title: 'Movie', content: 'watch movie', done: false},
			{id: 3, title: 'Dinner', content: 'eat dinner', done: true},
		],
		selectedTodo: null
	}

	clickTodoHandler = td => {
		if (this.state.selectedTodo === td) {
			this.setState({...this.state, selectedTodo: null});
		} else {
			this.setState({...this.state, selectedTodo: td});
		}
	}

	render() {
		const todos = this.state.todos.map(todo => {
			return <Todo key = {todo.id} title={todo.title} done ={todo.done} clicked ={() => this.clickTodoHandler(todo)} />
		})

		let todoDetail = null;
		if (this.state.selectedTodo) {
			todoDetail = <TodoDetail title={this.state.selectedTodo.title} content={this.state.selectedTodo.content}/>
		}
		return (
			<div className='TodoList'>
				<div className='title'>{this.props.title}</div>
				<div className ='todos'>{todos}</div>
				{todoDetail}
				<NavLink to="/new-todo" exact>New Todo</NavLink>
			</div>
		);
	}
}

export default TodoList;
