import List from "./components/List"
import NewItem from "./components/NewItem"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>Навигация</nav>
          <Link to="/list">Список сотрудников</Link>
          <Link to="/new">Создать</Link>
          <Link to="/">Настройки</Link>
        </header>
        <div className="container">        
          <Switch>
            <Route path="/list" component={List} /> 
            <Route path="/new" component={NewItem} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
