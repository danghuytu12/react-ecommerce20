import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalsState";
import Header from "./components/header/Header";
import MainPages from "./components/mainpages/Pages";
function App() {
  return (
    <DataProvider>
      <Router>
        <div >
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
