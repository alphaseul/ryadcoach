import React, { Component } from "react";
import UserService from "../services/user.service";
import thumbnail from "../page/img/nothumbnail.png";
import SingleVid from "../page/Singlevid";
import { Link } from "react-router-dom";

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
  openSingle(url) {
    return <SingleVid vidLink={url} />;
  }

  render() {
    const data = this.state.content;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.abonnement === true) {
      var listVideos = data.map((objectMAp, index) => (
        <div key={index}>
          <div className="thumbnail vid-margin ml-1">
            <Link to={`/${objectMAp.snippet.resourceId.videoId}`}>
              <img
                src={
                  objectMAp.snippet.thumbnails.default
                    ? objectMAp.snippet.thumbnails.default.url
                    : thumbnail
                }
                alt="thumbnails"
                className="image"
              />
            </Link>
          </div>
          <div>
            <b>{objectMAp.snippet.title}</b>
          </div>
        </div>
      ));
    }

    return (
      <div>
        <div className="entrainement row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mr-3 ml-3">
          {listVideos}
        </div>
        <div className="entrainement">{!user.abonnement && <Abonnement />}</div>
      </div>
    );
  }
}

export default Seances;
