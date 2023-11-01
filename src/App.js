import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div class="App">
<h1> Employee Management System</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Add/>}></Route>
            <Route path='/Edit' element={<Edit/>}></Route>
            </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
