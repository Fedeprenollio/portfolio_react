import React from "react";
import "./styles.css";
import * as Icons from "react-icons/si";

/* Your icon name from database data can now be passed as prop */
export const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.SiRedux />;
  }

  return <IconComponent />;
};

// export default function App() {
//   return (
//     <div className="App">
//       <DynamicFaIcon name="FaAngellist" />
//       <DynamicFaIcon />
//     </div>
//   );
// }