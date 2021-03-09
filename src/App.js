import List from "./components/List"
import NewItem from "./components/NewItem"
import Info from "./components/Info"

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>Навигация</nav>
      </header>
      <div className="container">
        <div className="container__main">
          <h1>Список сотрудников</h1>
          <ul>
            <List />
          </ul>
          <button>
            <Link to="/new">Создать</Link>
          </button>
        </div>
        <div className="container__info"></div>                  
        <Switch>
          <Route path="/new" component={NewItem} />
          <Route path="/info/:id" component={Info} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
