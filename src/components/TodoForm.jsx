import React, { useState } from 'react'

function TodoForm({addTodo}){
  const [title, setTitle] =useState('');

  function handleSubmit (event){
    event.preventDefault();
    addTodo(title);
    setTitle('');
  }

  function handleChangeTitle(event){
    setTitle(event.target.value);
  }

  console.log(title);

  return (
    <div style={styles.container}>
      <form 
        onSubmit={(event) =>{
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          value={title}
          onChange={(event) => {
            handleChangeTitle(event)
          }}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
    fontFamily: 'Georgia, serif',
  },
  button: {
    height: '72px',
    fontSize: '16px',
    fontFamily: 'Georgia, serif',
  },
}

export default TodoForm;