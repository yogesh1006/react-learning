import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    console.log("Child - Constructor " + this.props.name);
  }

  async componentDidMount() {
    // Best place to make API calls

    const data = await fetch("https://api.github.com/users/yogesh1006");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });

    console.log("Child - componentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component willumount");
  }

  render() {
    console.log(this.state);
    const { avatar_url, location, name } = this.state.userInfo;

    console.log("Child - Render " + this.props.name);

    return (
      <div>
        <h3>This is profile class Component</h3>
        <img
          src={avatar_url}
          alt="profile"
          // style={{ width: "100px", height: "100px", borderRadius:"50%" }}
        />
        <h4>Name: {name}</h4>
        <h4>location: {location}</h4>
        {/* <button
          onClick={() => {
            // we do not mutate state directly
            // never do this => this.state = something
            this.setState({
              count: 1,
            });
          }}
        >
          Setcount
        </button> */}
      </div>
    );
  }
}

export default Profile;

/**
 * child constructor
 * child render
 * child componentDidMOunt
 * 
 * API call
 * Set state
 * 
 * <UPDATE CYCLE>
 * Render
 * ComponentDidUpdate
 */