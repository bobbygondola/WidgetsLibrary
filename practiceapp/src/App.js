import React, {useState} from 'react';
import './App.css';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown'

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front-end JavaScript framework."
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite front-end JavaScript framework for creating resuable UI components."
//   },
//   {
//     title: "How do you use React?",
//     content: "React is used by creating UI components to complete web applications."
//   }
// ]

const options = [
  {
      label: "Red",
      value: 'red'
  },
  {
      label: "Green",
      value: 'green'
  },
  {
      label: "Blue",
      value: "blue"
  }
]

function App() {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div className="App">
      {/* <Search /> */}
      {/* <Accordion items={items}/> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
      <Dropdown
      onSelectedChange={setSelected}
      selected={selected} 
      options={options} 
      /> : null
      }
      
    </div>
  );
}

export default App;
