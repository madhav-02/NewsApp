import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <News pageSize={15} />
    </div>
  );
}

export default App;
