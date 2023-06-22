import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/products"
          element={
            <>
              <Header />
              <div className="products">
                <Sidebar />
                <Cards />
              </div>
            </>
          }
        />

        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
