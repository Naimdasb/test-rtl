import { useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleAdd = () => {
    setList(list => [text, ...list])
  }

  return (
    <div className="App">
      <label htmlFor='text'>Input
      <input value={text} type='text' placeholder='Enter text..' onChange={handleChange} name='text' />
      </label>
      <button onClick={handleAdd}>Add</button>
      {list && list.map(el => <h1 key={el}>{el}</h1>)}
    </div>
  );
}

export default App;
