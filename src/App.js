import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import List from "./components/List";
import NewItem from "./components/NewItem";
import Settings from "./components/Settings";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  // если sidebarShow = true - список отображается на всю страницу
  // если sidebarShow = false - размер списка уменьшается и сбоку отображается меню
  let [sidebarShow, sidebarSwitch] = useState(false);

  return (    
    <Container className="App" maxWidth="lg">
      <Grid container
        direction="column"
        alignItems="stretch"

        spacing={3}
      >
        <Grid item>
          <Menu sidebarSwitch={sidebarSwitch} />
        </Grid>
        <Grid lg={12} item>
          <Switch>
            <Route path="/list" render={(props)=><List sidebarSwitch={sidebarSwitch} sidebarShow={sidebarShow} {...props}/>} /> 
            <Route exact path="/new" component={ NewItem } />
            <Route exact path="/settings" component={ Settings } />
            <Redirect to="/" />
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
