import "./App.css";
import Home from "./page/Home";
import NavBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
