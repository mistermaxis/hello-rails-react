import React from "react"
import { Link } from "react-router-dom";
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Index</h1>
        <Link to="/greeting">Greeting</Link>
      </React.Fragment>
    );
  }
}

export default Index
