import React from 'react'

function TodoItem({todo}){
    return (
        <div style={styles.todoItem}>
            <p>{todo.title}</p>
        </div>
        
        )
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
    },
  }


export default TodoItem;