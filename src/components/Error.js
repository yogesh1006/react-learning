import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()  
  return (
    <div>
      <h1>Oops !!</h1>
      <h3>Something Went wrong!!</h3>
      <h2>{err.status  + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;
