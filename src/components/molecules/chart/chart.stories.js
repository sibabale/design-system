import { faker } from "@faker-js/faker";
import { LineChart as LineChartComponent } from "./line_chart.jsx";
import colors from "../../../theme/colors";

export default {
  title: "Design System/Molecules/Charts",
  component: LineChartComponent,
  argTypes: {
    labels: { control: { type: "object" } },
  },
};

export const LineChart = (args) => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <LineChartComponent
      {...args}
      labels={labels}
      datasets={[
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
      ]}
      lineTension={0.3}
    />
  );
};
