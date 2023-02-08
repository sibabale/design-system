import React from "react";
import PropTypes from "prop-types";
import {
  Title,
  Legend,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  Title,
  Legend,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale
);

ChartJS.defaults.font = { family: `"Montserrat", sans-serif`, size: 14 };

export const LineChart = ({ title, labels, datasets, lineTension }) => {
  const defaultOptions = {
    lineTension: lineTension,
    pointRadius: 2,
    pointStyle: "line",
  };

  const data = {
    labels,
    datasets: datasets.map((dataset) => {
      const updatedDataSet = { ...dataset, ...defaultOptions };

      return updatedDataSet;
    }),
  };

  const options = {
    elements: {
      point: {
        radius: 300,
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
    responsive: true,
    plugins: {
      legend: {
        align: "start",
        position: "bottom",
        pointStyle: "line",
        labels: {
          boxHeight: 900,
          pointStyle: "line",
          usePointStyle: true,
          pointStyleWidth: 30,
        },
      },
      title: {
        text: title,
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        display: false,
      },
    },
  };

  return <Line options={options} data={data} />;
};

LineChart.propTypes = {
  labels: PropTypes.array,
  lineTension: PropTypes.number,
};
LineChart.defaultProps = {
  labels: [],
  lineTension: 0.8,
};
