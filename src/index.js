import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import styled from "styled-components";
import { BarChart } from "./components";

const App = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <Fragment>
      <BarChartContainer>
        <BarChart />
      </BarChartContainer>
      <ContentContainer>
        <div className="wrapper">
          <img
            src="https://avatars0.githubusercontent.com/u/11039098?v=4"
            width="140px"
            height="140px"
          />
          <span className="name">Bimal Gurung</span>
          <span className="field">(React Native Developer)</span>
          <span className="technologies-title">Key Technologies:</span>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>
            </li>
            <li>
              <a
                href="https://facebook.github.io/react-native/"
                target="_blank"
              >
                React Native
              </a>
            </li>
            <li>
              <a href="https://redux.js.org/" target="_blank">
                Redux
              </a>
            </li>
            <li>
              <a href="https://d3js.org/" target="_blank">
                D3js
              </a>
            </li>
            <li>
              <a href="https://electronjs.org/" target="_blank">
                Electronjs
              </a>
            </li>
          </ul>
          <a
            className="work"
            href="https://stackblitz.com/@bimalgrg519"
            target="_blank"
          >
            Work
          </a>
          <a
            className="facebook"
            href="https://facebook.com/bimalgrg519"
            target="_blank"
          >
            <img src="facebook.png" />
          </a>
        </div>
      </ContentContainer>
    </Fragment>
  );
};

const BarChartContainer = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;

  .bar {
    fill: rgba(255, 255, 255, 0.2);
  }
  .bar:hover {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: 1;
    color: #333538;
    padding: 20px 30px;
    max-width: 550px;
    box-shadow: 0 15px 50px -15px rgba(0, 0, 0, 0.15);
    background-color: #fff
    border-radius: 5px;
    
    img {
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .name {
      font-weight: 400;
      font-size: 40px;
      margin-top: 20px;
    }

    .field {
      font-weight: 300;
      font-size: 18px;
    }

    .technologies-title {
      margin-top: 25px;
      font-size: 20px;
    }

    .work, .facebook {
      margin-top: 10px;
    }
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
