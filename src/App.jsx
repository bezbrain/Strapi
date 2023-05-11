import Interface from "./components/Interface";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <Interface clickBar={() => setToggleNav(true)} />
      {toggleNav && <Nav clickClose={() => setToggleNav(false)} />}
    </>
  );
}

export default App;
