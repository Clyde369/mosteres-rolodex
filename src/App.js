import { Component } from "react";
import "./App.css";
import Card from "./components/Cards/Card.component";

class App extends Component {
  constructor() {
    //calls the underlying constructor
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log(this.props.monsters)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    return (
      <div className="App bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 p-10">
        <input
          className="p-3 m-3 block w-full mx-auto search-box rounded-2xl border-spacing-6 box-border text-white bg-black overflow-hidden  md:max-w-2xl "
          type="search"
          placeholder="Search your Monster"
          onChange={onSearchChange}
        />

        <Card monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
