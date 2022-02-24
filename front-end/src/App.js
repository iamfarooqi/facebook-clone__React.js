import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Login from './Components/Login';
// import Post from './Post';
import './App.css'
import Widget from './Components/Widget';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <>{

      !user ? (<Login />) : (
          <div className="App">
          <Header />
          <div className='app__body'>
              <Sidebar />
              <Feed />
              <Widget />
          </div>
          </div>
  )
}
  </>
  );
}

export default App;