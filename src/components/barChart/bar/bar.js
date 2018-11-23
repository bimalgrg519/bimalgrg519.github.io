import React from "react";
import { select } from "d3-selection";

class Bar extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.barTransition();
  }
  barTransition() {
    const node = this.ref.current;
    const { yScale, height, data, t } = this.props;

    select(node)
      .selectAll(".bar")
      .data(data)
      .transition(t)
      .attr("y", d => yScale(d))
      .attr("height", d => height - yScale(d));
  }
  init() {
    const { xScale, yScale, data, height } = this.props;

    const node = this.ref.current;

    // prepare the field
    const bar = select(node)
      .selectAll(".bar")
      .data(data);

    // add rect to svg
    bar
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, key) => xScale(key))
      .attr("y", height)
      .attr("width", xScale.bandwidth());

    this.barTransition();
  }
  render() {
    return <g className="bar-group" ref={this.ref} />;
  }
}

export default Bar;
