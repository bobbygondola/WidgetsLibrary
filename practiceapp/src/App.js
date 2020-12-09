import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: "What is React?",
    content: "React is a front-end JavaScript framework."
  },
  {
    title: "Why use React?",
    content: "React is a favorite front-end JavaScript framework for creating resuable UI components."
  },
  {
    title: "How do you use React?",
    content: "React is used by creating UI components to complete web applications."
  }
]

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
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/wiki">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      
    </div>
  );
}

export default App;
