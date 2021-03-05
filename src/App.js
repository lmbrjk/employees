import List from "./components/List"
import NewItem from "./components/NewItem"


function App() {
  return (
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
        </div>
        <div className="container__info"></div>
        <div className="new-item"><NewItem /></div>      
      </div>
    </div>
  );
}

export default App;
