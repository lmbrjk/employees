import List from "./components/List"
import NewItem from "./components/NewItem"
import Settings from "./components/Settings"
import { Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    
      <div className="App">
        <header>
          <nav>Навигация</nav>
          <Link to="/list">Список сотрудников</Link>
          <Link to="/new">Создать</Link>
          <Link to="/settings">Настройки</Link>
        </header>
        <div className="container">        
          <Switch>
            <Route path="/list" component={List} /> 
            <Route path="/new" component={NewItem} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    
  );
}

export default App;
