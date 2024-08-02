import {Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import './stylesheet/home.css';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/emptyPage' exact component={PageNotFound}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
