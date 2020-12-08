import React from 'react';
import './App.css';
// import Accordion from './components/Accordion';
import Search from './components/Search';

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

function App() {
  return (
    <div className="App">
      <Search />
      {/* <Accordion items={items}/> */}
    </div>
  );
}

export default App;
