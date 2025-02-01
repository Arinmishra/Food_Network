import React from "react";
import User from "./user";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent Componentdidmount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1 className="font-bold text-3xl m-5 text-center">About Me</h1>
        <div className="border border-amber-900 w-fit mx-auto my-5 px-5 py-3 rounded-lg shadow-2xl">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHOah6g1wr9rA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724921723004?e=1743638400&v=beta&t=GO6QAnYP9KZMSdtiM-hif9Hy-q5jLFt9iN1tN-5flsk"
            className="w-72 block mx-auto rounded-xl shadow-lg"
          ></img>

          <p className="text-center text-lg m-3">
            Hey👋
            <span className="block mt-1">
              I am Arin Mishra, Web Developer😊
            </span>
          </p>
          <p className=" text-center  m-5">
            <a
              href="https://www.linkedin.com/in/arin-mishra-3021a724b/"
              target="_blank"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg duration-300 ease-in hover:bg-blue-800"
            >
              Linkedin🤙
            </a>
          </p>
          <p className=" text-center  m-5">
            <a
              href="https://github.com/Arinmishra"
              target="_blank"
              className="bg-slate-700 text-white px-5 py-2 rounded-lg duration-300 ease-in hover:bg-slate-800"
            >
              GitHub🤙
            </a>
          </p>
        </div>

        {/* <p>
          Count is:{" "}
          <span className="font-bold text-xl">{this.state.count}</span>
        </p>
        <button
          className=" border bg-blue-500 text-white rounded py-1 px-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>

        <h1>
          Logged In User:
          <UserContext.Consumer>
            {(data) => (
              <p className=" inline font-bold">{" " + data.loggedInUser}</p>
            )}
          </UserContext.Consumer>
        </h1>

        <h2>Name: {this.props.name}</h2>
        <h2>Location: {this.props.location}</h2>
        <User name="First " location="Nahi Batani" />
        <User name="Second " location="Nahi Batani" /> */}
      </div>
    );
  }
}

export default About;
