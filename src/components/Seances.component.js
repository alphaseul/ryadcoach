import React, { Component } from "react";
import UserService from "../services/user.service";
import Iframe from "react-iframe";

import "./css/seances.css";

class Seances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }
  componentDidMount() {
    UserService.getVideos().then((response) => {
      this.setState({
        content: response.items,
      });
    });
  }

  render() {
    const data = this.state.content;
    console.log(data);
    const listVideos = data.map((objectMAp, index) => (
      <div key={objectMAp.id}>
        <li>
          <div className="videos ">
            <Iframe
              id="player"
              width="540"
              height="260"
              url={`https://www.youtube.com/embed/${objectMAp.snippet.resourceId.videoId}`}
              allow="fullscreen"
            ></Iframe>
          </div>

          <h3>{objectMAp.snippet.title}</h3>
        </li>
      </div>
    ));
    return (
      <div className="entrainement row row-cols-1 row-cols-md-2 g-4">
        {listVideos}
      </div>
    );
  }
}

export default Seances;
