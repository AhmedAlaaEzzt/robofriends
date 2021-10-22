import CardList from "./components/card-list/card-list";
import { robots } from "./Data/robots";
import SearchBox from './components/search-box/search-box';


const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
