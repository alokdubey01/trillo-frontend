import React from 'react';
import Nav from './components/Nav';
import List from './components/List1/List';
import List2 from './components/List2/List2';
import List3 from './components/List3/List3';
import "./App.css"

function App() {
  
  return (
    <div className="app">
      <Nav/>
      <div className="card">
      <List/>
      <List2/>
      <List3/>
      </div>
      
      
    </div>
  )
}

export default App
