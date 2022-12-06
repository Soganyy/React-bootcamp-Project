import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import './reset.css';
import './common.css';
import { Routes, Route, Link } from 'react-router-dom'
import ListItem from './components/Lists/ListItem'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        
        <Link to="">Home Page</Link>

        <Routes>
          <Route element={<MainPage />} path=""> </Route>
          <Route path="/ListItem:id" element={<ListItem />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
