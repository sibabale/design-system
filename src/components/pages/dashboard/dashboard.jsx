import React from "react";
import { Pill } from "../../atoms/pill/pill";
import { Card } from "../../molecules/card/card";
import { Avatar } from "../../atoms/avatar/avatar";
import { LineChart } from "../../molecules/chart/line_chart";
import { faker } from "@faker-js/faker";
import { MainLayout } from "../../organism/main_layout/main_layout";

import Lipstick from "../../../assets/images/lipstick.png";
import Perfume from "../../../assets/images/perfume.png";
import {
  Line,
  SectionOne,
  SectionTwo,
  ProductRow,
  Transaction,
  ProductImage,
  ChartSection,
  ProductTable,
  Transactions,
  ChartSettings,
  DownloadButton,
  TransactionPrice,
  TransactionIndividual,
} from "./dashboard.styles";
import colors from "../../../theme/colors";
import Button from "../../atoms/button/button";

export const Dashboard = (props) => {
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
    <MainLayout>
      <SectionOne>
        <ChartSection>
          <LineChart
            labels={labels}
            datasets={[
              {
                label: "Completed",
                data: [0, 20, 40, 13, 25, 19, 10, 54, 34, 44, 3],
                borderColor: colors.base.primary,
              },
              {
                label: "Refunds",
                data: [0, 40, 12, 30, 32, 39, 4, 49, 10, 13, 44, 3],
                borderColor: colors.base.accent,
              },
            ]}
            lineTension={0.3}
          />
          <ChartSettings>
            <Pill
              icon="show_chart"
              text="Line Chart"
              variant="tertiary-300"
              rounded={true}
            />
            <DownloadButton>
              <Button
                icon="download"
                size="small"
                rounded={true}
                variant="tertiary-300"
              />
            </DownloadButton>
          </ChartSettings>
        </ChartSection>

        <Card header="Recent Transactions">
          <Transactions>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Transaction>
                <Avatar size="small" image={faker.image.avatar()} />
                <div>
                  <TransactionIndividual>
                    {faker.name.fullName().length >= 12
                      ? `${faker.name.fullName().slice(0, 10)} ...`
                      : faker.name.fullName()}
                  </TransactionIndividual>
                  <TransactionPrice>2 minutes ago</TransactionPrice>
                </div>
                <b>R50.00</b>
              </Transaction>
            ))}
          </Transactions>
        </Card>
      </SectionOne>

      <SectionTwo>
        <ProductTable>
          <Card header="Popular Products">
            <ProductRow>
              <h6>Image</h6>
              <h6>Product</h6>
              <h6>Category</h6>
              <h6>Sales</h6>
              <h6>Value</h6>
              <h6>Availability</h6>
            </ProductRow>
            <Line />
            <ProductRow>
              <ProductImage src={Lipstick} />
              <p>Red Lipstick</p>
              <p>Cosmetics</p>
              <p>90</p>
              <p>R9,000.000</p>
              <Pill text="Available" rounded={true} />
            </ProductRow>
            <ProductRow>
              <ProductImage src={Perfume} />
              <p>No 5 Channel Perfume</p>
              <p>Cosmetics</p>
              <p>66</p>
              <p>R102,000.00</p>
              <Pill text="Out of Stock" rounded={true} variant="accent-400" />
            </ProductRow>
          </Card>
        </ProductTable>
      </SectionTwo>
    </MainLayout>
  );
};

export default Dashboard;
