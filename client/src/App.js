import './App.css';
import { Route, useLocation } from 'react-router-dom';
import { Home, Landing, Form, Detail } from './views';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <div className='App'>

      {location.pathname !== "/" && <NavBar />}

      <Route exact path= '/'>
        <Landing />    
      </Route>

      <Route path='/home'>
        <Home /> 
      </Route>

      <Route path='/detail'>
        <Detail /> 
      </Route>

      <Route path='/create'>
        <Form /> 
      </Route>

    </div>
  );
}

export default App;
