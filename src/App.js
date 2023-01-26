import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path="/" element={ <News key="general" category="general"/> } ></Route>    // Here key is the main attribute. Without key, on clicking any nav link, the end point will change. But the corres. component will not render. This is because key acts like a unique value that identifies each component uniquley. Upon specifiing this only, the corresponding component will get rendered. Keep this in mind
            <Route exact path="/business" element={ <News key="business" category="business"/> } ></Route>
            <Route exact path="/health" element={ <News key="health" category="health"/> }></Route>
            <Route exact path="/sports" element={ <News key="sports" category="sports"/> }></Route>
            <Route exact path="/entertainment" element={ <News key="entertainment" category="entertainment"/>}></Route>
            <Route exact path="/science" element={ <News key="science" category="science"/> }></Route>
            <Route exact path="/technology" element={ <News key="technology" category="technology"/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
