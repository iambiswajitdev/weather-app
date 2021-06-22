import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Wather from "./component/wather";

function App() {
  return (
    <div className="App">
      <div className="manu">
        <NavBar />
      </div>
      <div className="main_table">
        <Wather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
