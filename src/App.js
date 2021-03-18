import List from "./components/List"
import NewItem from "./components/NewItem"
import Info from "./components/Info"
import ChangeItem from "./components/ChangeItem"
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
          <List />          
          <button>
            <Link to="/new">Создать</Link>
          </button>
        </div>
        <div className="container__info"></div>                  
        <Switch>
          <Route path="/new" component={NewItem} />
          <Route path="/info/:id" component={Info} />
          <Route path="/edit/:id" component={ChangeItem} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
