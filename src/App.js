
import Signup from './Signup';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './Login';
import Landing from './Landing';
import Addtask from './Addtask';
import Tasklist from './Tasklist';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Landing/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/addtask">
            <Addtask/>
          </Route>

          <Route path="/tasklist">
            <Tasklist/>
          </Route>

          <Route path="/edittask:id">
            <Edit/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;