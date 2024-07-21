import {Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import courses from './pages/Courses';
import Certificate from './pages/Certificates';
import './stylesheet/home.css';
import ContactMe from './components/ContactMe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/courses' exact component={courses}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/contactMe' exact component={ContactMe}/>
        <Route path='/certificates' exact component={Certificate}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
