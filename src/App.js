/* eslint-disable linebreak-style */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import UserConversations from './Containers/UserConversations';
import Welcome from './Containers/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-conversations">
          <UserConversations />
        </Route>
        <Route path="/continue">
          <Welcome />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
