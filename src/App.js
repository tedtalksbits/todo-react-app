import { useState } from 'react';
import './App.css';
import { Title, Button, Task, ButtonContainer  } from './Elements'

function App() {

  const [todos, setTodos] = useState(['Go for a run', 'Build a new app'])
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
    // this will fire when the button is clicked
    setTodos([...todos, input]);

    // prevent form from refreshing on submit
    event.preventDefault();

    // reset input to empty after submit
    setInput('');
  }
  return (
    <div className="app">
      <Title>todo app</Title>
      
      <form action="">

        {todos.map( todo => (
          <Task>{todo}</Task>
        ))}
        <div className="input-container">
          <input 
            className='app__input' 
            type="text" 
            placeholder='add a todo'
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </div>
        <ButtonContainer>
          <Button 
            primary={true}
            onClick={addTodo}
            type='submit'
            disabled={!input}
          >
            New Task
          </Button>
        </ButtonContainer>

      </form>
      
    </div>
  );
}

export default App;
