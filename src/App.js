
import './App.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
