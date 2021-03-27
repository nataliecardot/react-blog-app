import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // JSX template
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch component ensures that only one route shows at any one time */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
