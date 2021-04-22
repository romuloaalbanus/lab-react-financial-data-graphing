import React from "react";
import axios from "axios";
import { Chart } from "chart.js";

class ChartBox extends React.Component {
  state = {
    data: [],
    chart: "",
  };

  componentDidMount = async () => {
    try {
      const downloadedData = await axios.get(
        "http://api.coindesk.com/v1/bpi/historical/close.json"
      );
      this.setState({ data: downloadedData.data.bpi });
      console.log(this.state.data);
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {};

  renderGraph = () => {};

  render() {
    return (
      <div>
        <canvas id="myChart" style={{ width: "200px" }}></canvas>
      </div>
    );
  }
}

export default ChartBox;
