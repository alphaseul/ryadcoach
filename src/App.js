import "./App.css";
import NavBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import MyRoute from "./Route";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MyRoute />
      <Footer />
    </div>
  );
}

export default App;
