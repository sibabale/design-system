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
import colors from "../../../theme/colors";
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
    responsive: true,
    maintainAspectRatio: false,
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
  datasets: [
    {
      label: "Completed",
      data: [0, 20, 40, 13, 25, 19, 10, 54, 34, 44, 3],
      borderColor: colors.base.primary,
    },
    {
      label: "Dataset 2",
      data: [0, 40, 12, 30, 32, 39, 4, 49, 10, 13, 44, 3],
      borderColor: colors.base.accent,
    },
  ],
};
