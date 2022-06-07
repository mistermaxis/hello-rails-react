import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import store from "../redux/store";
import Greeting from "./Greeting";
import Index from "./Index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Link to="/greeting">Greeting</Link>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
