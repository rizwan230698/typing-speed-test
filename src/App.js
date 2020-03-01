import React from "react";
import "./App.css";
import Details from "./components/details/Details";
import Preview from "./components/Preview/Preview";
import Footer from "./components/Footer/Footer";
import Speaker from "./components/speaker/Speaker";

function App() {
  return (
    <div className="App">
      <Details />
      <Preview />
      <Footer />
      <Speaker />
    </div>
  );
}

export default App;
