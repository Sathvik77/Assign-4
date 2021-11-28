import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Home from './Home';

function React_app() {
  return (
    <div className="React_app">
      <Route path='/' exact component={Home}/>
      <Route path='/Article1' exact component={Article1}/>
      <Route path='/Article2' exact component={Article2}/>
      <Route path='/Article3' exact component={Article3}/>
    </div>
  );
}

export default React_app;
