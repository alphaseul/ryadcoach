import React from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import "./css/singlevid.css";

const SingleVid = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div className="single_page">
      <h1>{id}</h1>
      <Iframe
        id="player"
        url={`https://www.youtube.com/embed/${id}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1`}
        allow="fullscreen"
        frameBorde="0"
        className="container vidStyle"
      ></Iframe>
    </div>
  );
};

export default SingleVid;
