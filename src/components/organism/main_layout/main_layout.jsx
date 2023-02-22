import React from "react";
import {
  LayoutContent,
  Header,
  Sidebar,
  MainLayoutContianer,
  HeaderAndContentContainer,
} from "./main_layout.styles";

export const MainLayout = ({ children }) => {
  return (
    <MainLayoutContianer>
      <Sidebar
        logo="https://bit.ly/3YpHOkV"
        links={[
          { text: "Dashboard", icon: "dashboard", route: "dashboard" },
          { text: "Payments", icon: "credit_card", route: "credit_card" },
          { text: "Reports", icon: "bar_chart", route: "bar_chart" },
          {
            text: "Transaction",
            icon: "receipt_long",
            route: "receipt_long",
          },
          { text: "Logout", icon: "logout", route: "logout" },
        ]}
      />
      <HeaderAndContentContainer>
        <div>
          <Header />
        </div>
        <LayoutContent>{children}</LayoutContent>
      </HeaderAndContentContainer>
    </MainLayoutContianer>
  );
};

export default MainLayout;
