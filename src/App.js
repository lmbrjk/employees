import { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Container, Grid } from "@material-ui/core/";

import List from "./containers/List";
import NewItem from "./containers/NewItem";
import Settings from "./containers/Settings";

import Menu from "./components/Menu";

import store from "./store";

function App() {
  // если sidebarShow = true - список отображается на всю страницу
  // если sidebarShow = false - размер списка уменьшается и сбоку отображается меню
  let [sidebarShow, sidebarSwitch] = useState();

  return (
    <Provider store={store}>
      <Router>
        <Container className="App" maxWidth="lg">
          <Grid container direction="column" alignItems="stretch" spacing={3}>
            <Grid item>
              <Menu sidebarSwitch={sidebarSwitch} />
            </Grid>
            <Grid lg={12} item>
              <Switch>
                <Route
                  path="/list"
                  render={(props) => (
                    <List
                      sidebarSwitch={sidebarSwitch}
                      sidebarShow={sidebarShow}
                      {...props}
                    />
                  )}
                />
                <Route exact path="/new" component={NewItem} />
                <Route exact path="/settings" component={Settings} />
                <Redirect to="/" />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
