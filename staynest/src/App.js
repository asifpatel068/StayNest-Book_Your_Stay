import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HostLoginPage from './components/HostLoginPage';
import HostAccountPage from './components/HostAccountPage';

const App = () => {
  const handleHostSignup = (formData) => {
    // Add the name and host_status fields to the form data
    formData.name = formData.name.trim(); // Trim whitespace from the name
    formData.host_status = formData.host_status || false; // Set default value for host_status
    // Implement the signup logic here
    console.log('Signup form data:', formData);
  };

  const handleHostLogin = (formData) => {
    // Implement the login logic here
    console.log('Login form data:', formData);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/host/login">Host Login</Link>
            </li>
            <li>
              <Link to="/host/signup">Host Signup</Link>
            </li>
            <li>
              <Link to="/host/account/1">Host Account</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/host/login">
            <HostLoginPage onLogin={handleHostLogin} onSignup={handleHostSignup} />
          </Route>
          <Route path="/host/account/:hostId">
            <HostAccountPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
