import { Route, Routes, Router } from 'react-router-dom'
import Home from './pages/Home';
import './stylesheet/home.css';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/emptyPage' exact component={PageNotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
