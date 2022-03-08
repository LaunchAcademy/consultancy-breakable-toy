import React from "react";

import "../../style/home/home.pcss";
import "../../style/main.pcss";

export const Home = () => (
  <div className="home">
    <div className="home__box">
      <h1 className="home__header">
        Welcome to <span className="rainbow-text">Squid Central</span>
      </h1>
      <h3 className="home__sub-header">
        Home of the <span className="rainbow-text">dankest</span> of rubbery-folk
      </h3>
    </div>
  </div>
);