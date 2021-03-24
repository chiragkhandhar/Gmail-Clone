import "./App.css";

import Navbar from "./Components/Navbar";
import MenuBar from "./Components/MenuBar";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuBar />
      <Content/>
    </div>
  );
}

export default App;
