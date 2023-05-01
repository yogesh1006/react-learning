import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent- Constructor");
  }

  componentDidMount() {
    // console.log("Parent- componentDidMount");
  }

  render() {
    // console.log("Parent- Render");

    return (
      <>
        <h1>About Us Page</h1>
        <p>This is Namste React Live course - let's get classy !!</p>
        {/* <Outlet /> */}
        <ProfileClassComponent name="First Child" />
        {/* <ProfileClassComponent name="Second Child" /> */}
      </>
    );
  }
}

export default About;

/**
 *  Parent Constructor
 *  Parent Render
 *      First child - Constructor
 *      first child  - render
 *      Second Child -  constructor
 *      second Child  - Render
 * 
 *      DOM Updated For childern - 
 * 
 *      First Child  - ComponentDidMount
 *      Second Child  - CompoenentDidMount
 *  Parent - ComponentDidMount
 */
