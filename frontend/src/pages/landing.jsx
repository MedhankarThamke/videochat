import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const router = useNavigate();

  return (
    <>
      <div className="landingPageContainer">
        <nav>
          <div className="navHeader">
            <h2>VideoChat</h2>
          </div>
          <div className="navlist">
            <p
              onClick={() => {
                router("/medh");
              }}
            >
              join as guest
            </p>
            <p
              onClick={() => {
                router("/auth");
              }}
            >
              register
            </p>
            <div
              role="button"
              onClick={() => {
                router("/auth");
              }}
            >
              <p>login</p>
            </div>
          </div>
        </nav>
        <div className="landingMainContainer">
          <div>
            <h1>
              <span style={{ color: "#FF9839" }}>Connect</span> with your loved
              one
            </h1>
            <p>Cover the distance with VideoChat</p>
            <div role="button">
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src="/mobile.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
