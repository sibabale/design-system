import { Sidebar as SidebarComponent } from "./sidebar";

export default {
  title: "Design System/Organisms/Sidebar",
  argTypes: {
    logo: { control: { type: "text" } },
    links: { control: { type: "object" } },
  },
  component: SidebarComponent,
};

export const Sidebar = (args) => (
  <SidebarComponent
    logo="https://bit.ly/3YpHOkV"
    links={[
      { text: "Dashboard", icon: "dashboard", route: "dashboard" },
      { text: "Payments", icon: "credit_card", route: "credit_card" },
      { text: "Reports", icon: "bar_chart", route: "bar_chart" },
      { text: "Transaction", icon: "receipt_long", route: "receipt_long" },
      { text: "Logout", icon: "logout", route: "logout" },
    ]}
  />
);
