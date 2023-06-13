import { Component } from "react";
import "./App.css";
import DS from "./DS";

class App extends Component {
  constructor() {
    //calls the underlying constructor
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div class="App">
        {this.state.monsters.map((monster) => {
          return (
            
            <div class="p-10 mb-20" key={monster.id}>
              <DS/>
              <div class="group max-w-md mx-auto bg-white  rounded-2xl shadow-lg overflow-hidden  md:max-w-2xl m-4 transform transition duration-250 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-2 hover:bg-black ease-in-out duration-500">
                <div class="md:flex">
                  <div class=" md:flex-shrink-0"></div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 group-hover:text-white ease-in-out duration-500 font-semibold">
                      Roldex Monsters:
                    </div>
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline group-hover:text-white ease-in-out transform transition duration-250"
                    >
                      Name:
                    </a>
                    <p class="mt-2 text-gray-500 group-hover:text-white transform transition ease-in-out duration-250">
                      {monster.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          );
        })}
        <div id="card" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 transform transition duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-2">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card title</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Subheading</a>
      <p class="mt-2 text-gray-500">This is an example of modern card design using Tailwind CSS. You can replace this text with your own.</p>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default App;
