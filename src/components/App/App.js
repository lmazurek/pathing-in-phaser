import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <h2>Main</h2>;
const Subpage = () => <h2>Subpage</h2>;

const App = (props) => {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subpage/">Subpage</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/subpage/" exact component={Subpage} />

      </div>
    </Router>
  )
}

export default App;
