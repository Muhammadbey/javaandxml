// import React, { useContext } from "react";
// import { UserContext } from "../../App";

// const Context = () => {
//   const user = useContext(UserContext);
//   return <div>hello {user}</div>;
// };

// export default Context;

import React, { createContext, useContext } from "react";

const Theme = createContext();

const Context = () => {
  return <div>Context</div>;
};

export default Context;
