import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
    <div className="container">
      <h1>Dynamic List Manager</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an item"
          className="item"
        />
        <button
          onClick={AddItem}
        >
          Add Item
        </button>
        <div/>
        <div className="list">
    <ul>
        {item.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      </div>
      </div>
    </div>
  );
}

export default App;
