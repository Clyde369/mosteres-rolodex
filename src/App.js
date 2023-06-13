import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    //calls the underlying constructor
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log("constructor ");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users};
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 p-10">
        
        <input
          className="p-3 m-3 block w-full mx-auto search-box rounded-2xl border-spacing-6 box-border text-white bg-black overflow-hidden  md:max-w-2xl "
          type="search"
          placeholder="Search your Monster"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        
       
        {filteredMonsters.map((monster) => {
          return (
            <div className="p-5" key={monster.id}>
              <div className="border-[2px] border-transparent hover:border-[3px]  hover:border-white group max-w-md mx-auto bg-white  rounded-2xl shadow-lg overflow-hidden  md:max-w-2xl transform transition duration-250 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-2 hover:bg-black ease-in-out duration-500">
                <div className="md:flex">
                  <div className=" md:flex-shrink-0"></div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 group-hover:text-white ease-in-out duration-500 font-semibold">
                      Roldex Monsters:
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline group-hover:text-white ease-in-out transform transition duration-250"
                    >
                      Name:
                    </a>
                    <p className="mt-2 text-gray-500 group-hover:text-white transform transition ease-in-out duration-250">
                      {monster.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
