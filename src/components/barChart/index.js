import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Bar from "./bar/bar.js";
import { transition } from "d3-transition";
import { select } from "d3-selection";

const { innerWidth, innerHeight } = window;

class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: Array.from({ length: 70 }, () =>
        Math.floor(Math.random() * 100 + 1)
      )
    };
    this.ref = React.createRef();
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: Array.from({ length: 70 }, () =>
          Math.floor(Math.random() * 100 + 1)
        )
      });
    }, 2500);

    const delay = 0;
    const duration = delay + 5000;
    const total = (delay + duration) * 4;
    const node = this.ref.current;

    this.resetColor(node, delay, duration);

    setInterval(() => {
      this.resetColor(node, delay, duration);
    }, total);
  }
  resetColor(node, delay, duration) {
    select(node)
      .transition()
      .delay(delay)
      .duration(duration)
      .style("fill", "#61BC7B")
      .transition()
      .delay(delay)
      .duration(duration)
      .style("fill", "#508CC8")
      .transition()
      .delay(delay)
      .duration(duration)
      .style("fill", "#F49952")
      .transition()
      .delay(delay)
      .duration(duration)
      .style("fill", "#9C9EDB");
  }
  render() {
    const { data } = this.state;

    const margin = {
      top: 20,
      right: 0,
      bottom: 0,
      left: 0
    };
    const ticks = 6;
    const t = transition().duration(1500);

    const width = innerWidth - margin.left - margin.right;
    const height = innerHeight * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.3);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data)])
      .range([height, 0])
      .nice();

    return (
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <rect
          ref={this.ref}
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        />
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <Bar
            {...{
              xScale,
              yScale,
              data,
              height,
              t
            }}
          />
        </g>
      </svg>
    );
  }
}

export default BarChart;
