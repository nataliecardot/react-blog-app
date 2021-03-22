import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    // JSX template
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
