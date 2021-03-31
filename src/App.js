import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import List from "./components/List";
import NewItem from "./components/NewItem";
import Settings from "./components/Settings";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (    
    <Container className="App" maxWidth="lg">
      <Grid container
        direction="column"
        //justify="flex-start"
        alignItems="stretch"

        spacing={3}
      >
        <Grid item>
          <Menu />
        </Grid>
        <Grid lg={12} item>
          <Switch>
            <Route path="/list" render={(props)=><List {...props}/>}  /> 
            <Route path="/new" component={ NewItem } />
            <Route path="/settings" component={ Settings } />
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
