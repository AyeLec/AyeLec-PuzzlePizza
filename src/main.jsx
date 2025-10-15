import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./pages/Home";

const Main = () => {
  return (
    <React.StrictMode>
      <ScrollToTop>
        <Navbar />
        <Home />
        <Footer />
      </ScrollToTop>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);