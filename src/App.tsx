import React from 'react';
import { ITodos } from './types/types';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([])
  const [value, setValue] = React.useState('')
  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        completed: false,
      }])
      setValue('')
    }

  }
  return (
    <div className="App">
      <input value={value} onChange={e => setValue(e.target.value)} type="text" />
      <button onClick={addTodo}>Add</button>
      {todos?.map(item => <span>{item.title}</span>)}
    </div>
  );
}

export default App;
