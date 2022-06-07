import React from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Greeting from "./Greeting";
import Index from "./Index";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/greeting">Greeting</Link>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
