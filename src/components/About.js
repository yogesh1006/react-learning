import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";

const About = () => {
  return (
    <div>
      <div>
        <h1>About Us Page</h1>
      </div>
      <ProfileFunctionalComponent name="Yogesh function"/>
      <ProfileClassComponent name="Yogesh Class"/>
    </div>
  );
};

export default About;
