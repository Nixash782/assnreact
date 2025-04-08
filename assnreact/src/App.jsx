import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [item, setitem] = useState([]);
  const [input, setInput] = useState('');

  const AddItem = () => {
    if (input.trim() === '') return;
    setitem([...item, input]);
    setInput('');
  };

  const DeleteItem = (index) => {
    const newitem = item.filter((_, i) => i !== index);
    setitem(newitem);
  };

  return (
    <div class="container">
      <h1>Dynamic List Manager</h1>

      <div class="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an item"
          class  {
            constructor(parameters) {
              
            }
          }="item"
        />
        <button
          onClick={AddItem}
        >
          Add
        </button>
    <ul>
        {item.map((item, index) => (
          <li key={index} class="listitem">
            <span>{item}</span>
            <button
              onClick={() => DeleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
