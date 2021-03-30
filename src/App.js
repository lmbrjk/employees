import { Switch, Route, Link } from "react-router-dom"
import List from "./components/List"
import NewItem from "./components/NewItem"
import Settings from "./components/Settings"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    
      <div className="App">
        <Grid container>
          <Link to="/list">Список сотрудников</Link>
          <Link to="/new">Создать</Link>
          <Link to="/settings">Настройки</Link>
        </Grid>
        <Container maxWidth="lg">        
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
