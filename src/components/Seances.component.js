import React, { Component } from "react";
import UserService from "../services/user.service";
import Iframe from "react-iframe";

import "./css/seances.css";
import Abonnement from "./abonnement.component";

class Seances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }
  componentDidMount() {
    UserService.getVideos()
      .then((response) => {
        this.setState({
          content: response.items,
        });
      })
      .catch((error) => {
        this.setState({
          content: error,
        });
      });
  }

  render() {
    const data = this.state.content;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.abonnement === true) {
      var listVideos = data.map((objectMAp, index) => (
        <div key={objectMAp.id}>
          <div className="videos vid-margin ">
            <Iframe
              id="player"
              url={`https://www.youtube.com/embed/${objectMAp.snippet.resourceId.videoId}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1`}
              allow="fullscreen"
              frameBorde="0"
            ></Iframe>
          </div>
          <div>
            <b>{objectMAp.snippet.title}</b>
          </div>
        </div>
      ));
    }

    return (
      <div>
        <div className="entrainement row row-cols-1 row-cols-md-2 g-4 mt-3">
          {listVideos}
        </div>
        <div className="entrainement">{!user.abonnement && <Abonnement />}</div>
      </div>
    );
  }
}

export default Seances;
