import "./App.css";
import { useRef } from "react";

import Navbar from "./Components/Navbar";
import MenuBar from "./Components/MenuBar";
import Content from "./Components/Content";

function App() {
  const menuBarRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <div className="App">
      <Navbar contentRef={contentRef}/>
      <MenuBar ref={menuBarRef} contentRef={contentRef} />
      <Content ref={contentRef} menuBarRef={menuBarRef} />
    </div>
  );
}

export default App;
