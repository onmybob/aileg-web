import React from "react";

const goals = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <div className="content">
        Do you want to use AI features in your project, such as face
        recognition, voice cloning, automatic video generation, etc.? Now, you
        don’t need expensive servers for big data model training. We provide
        interfaces. You only need to simply develop to have AI functions, which
        is as easy as calling the weather forecast API.
      </div>
      <h2>Features:</h2>
      <ul>
        <li>
          <b>Lightweight -</b> Use minimal parameter requests to implement AI
          functions
        </li>
        <li>
          <b>Fast -</b>We deploy high-performance arithmetic servers in major
          nodes around the world, using load balancing to provide highly
          available high-performance servers
        </li>
        <li>
          <b>Safety -</b>The data submitted by the user is encrypted in the
          server
        </li>
        <li>
          <b>Quick to use -</b>Using the http protocol for data interaction,
          simple and clear to understand server
        </li>
        <li>
          <b>Low price -</b>We are currently in the research and development
          phase, all all services are free of charge, even if the charge, we
          guarantee that it is the cheapest
        </li>
      </ul>
    </div>
  );
};

export default goals;
