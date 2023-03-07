import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0)  
  return (
    <div>
      <h3>This is Profile Functional Component</h3>
      <h4>Name: {props.name}</h4>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(1)}>Setcount</button>
    </div>
  );
};

export default Profile;
