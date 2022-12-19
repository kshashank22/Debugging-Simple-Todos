import './index.css'

import {Component} from 'react'

class TodoItem extends Component {
  onDeleteTodo = () => {
    const {todoDetails, deleteTodo} = this.props
    const {id} = todoDetails
    deleteTodo(id)
  }

  render() {
    const {todoDetails} = this.props
    const {title} = todoDetails

    return (
      <li className="todo-item">
        <p className="title">{title}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={this.onDeleteTodo}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
