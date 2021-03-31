import { Switch, Route } from "react-router-dom"
import Menu from "./components/Menu"
import List from "./components/List"
import NewItem from "./components/NewItem"
import Settings from "./components/Settings"

import Container from '@material-ui/core/Container';


function App() {
  return (    
    <Container className="App" maxWidth="lg">
      <Menu />
      <Switch>
        <Route path="/list" render={(props)=><List {...props}/>}  /> 
        <Route path="/new" component={ NewItem } />
        <Route path="/settings" component={ Settings } />
      </Switch>
    </Container>
  );
}

export default App;
