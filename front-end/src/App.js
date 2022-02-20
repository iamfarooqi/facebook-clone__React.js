import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
// import Post from './Post';
import './App.css'
import Widget from './Components/Widget';

function App() {
  return (
    <div className="App">
          <Header />
          <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widget/>

          </div>
    </div>
  );
}

export default App;
