import React, { Component } from "react";

class SingleVid extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div>
        <div ref={this.myRef}>
          <ol>
            <li>
              <h1>hello</h1>
            </li>
            <li>
              <h1>hello</h1>
            </li>
            <li>
              <h1>hello</h1>
            </li>
            <li>
              <h1>hello</h1>
            </li>
            <li>
              <h1>hello</h1>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default SingleVid;
