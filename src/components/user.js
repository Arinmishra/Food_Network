import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "child constructor");
  }
  componentDidMount() {
    // console.log(this.props.name + "Child componentdidmount");
  }
  render() {
    // console.log(this.props.name + "child Render");
    return (
      <>
        <h1>User Component</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
      </>
    );
  }
}
export default User;
