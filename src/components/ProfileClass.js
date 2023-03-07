import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>This is profile class Component</h3>
        <h4>Name: {this?.props?.name}</h4>
        <h4>Count: {count}</h4>
        <button
          onClick={() => {
            // we do not mutate state directly
            // never do this => this.state = something
            this.setState({
              count: 1,
            });
          }}
        >
          Setcount
        </button>
      </div>
    );
  }
}

export default Profile;
