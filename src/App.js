import { Switch, Route, Link } from "react-router-dom"
import List from "./components/List"
import NewItem from "./components/NewItem"
import Settings from "./components/Settings"

import Container from '@material-ui/core/Container';

function App() {
  return (
    
      <div className="App">
        <header>
          <nav>Навигация</nav>
          <Link to="/list">Список сотрудников</Link>
          <Link to="/new">Создать</Link>
          <Link to="/settings">Настройки</Link>
        </header>
        <Container maxWidth="sm">        
          <Switch>
            <Route path="/list" component={ List } /> 
            <Route path="/new" component={ NewItem } />
            <Route path="/settings" component={ Settings } />
          </Switch>
        </Container>
      </div>
    
  );
}

export default App;
