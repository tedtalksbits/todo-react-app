import { useState } from 'react';
import './App.css';
import { Title, Button, Task, ButtonContainer  } from './Elements'

function App({ primary }) {

  const [todos, setTodos] = useState(['Go for a run', 'Build a new app'])

  return (
    <div className="app">
      <Title>todo app</Title>
      
      {
        todos.map( todo => (
          <Task>{todo}</Task>
        ))
      }
      <div className="input-container">
        <input className='app__input' type="text" placeholder='add a task'/>
      </div>
      <ButtonContainer>
        <Button primary={true}>Create Task</Button>
      </ButtonContainer>
      
    </div>
  );
}

export default App;
