import React from "react";
import { Component } from "react";

class Card extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props.monsters)
    console.log('render ')
    return (
      <div>
        {monsters.map((monsters) => (
         
         <div className="p-5" key={monsters.id}>
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
                  {monsters.name}
                </p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
