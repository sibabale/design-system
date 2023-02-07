import React from "react";
import styled from "styled-components";

import Avatar from "../../atoms/avatar/avatar";
import { Card as CardComponent } from "./card";
import Image from "../../../assets/images/avatar.avif";

export default {
  title: "Design System/Molecules/Card",
  component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

const ListItems = styled.ul`
  margin-top: 40px;
`;
const ListItem = styled.li`
  margin: 10px 0;
`;

export const Card = Template.bind({});

Card.args = {
  // header: "John Doe",
  children: (
    <>
      <Avatar image={Image} />
      <ListItems>
        <ListItem>First Name: John</ListItem>
        <ListItem>Last Name: Doe</ListItem>
        <ListItem>Sex: Male</ListItem>
        <ListItem>Age: 24</ListItem>
      </ListItems>
    </>
  ),
};

export const WithHeader = Template.bind({});

WithHeader.args = {
  header: "Place Holder Text",
  children: (
    <p>
      Anim ut velit cillum incididunt do. Lorem non mollit quis qui eu nostrud
      dolore commodo aliqua amet non quis incididunt. Dolor qui incididunt est
      minim. Et ea ullamco adipisicing amet esse ipsum minim voluptate Lorem
      sunt irure. Amet eu adipisicing proident sint ad exercitation do
      incididunt sit. Esse sunt aute elit minim aute ipsum cupidatat consectetur
      nulla pariatur. Ipsum non culpa eiusmod qui. Et culpa laboris quis
      exercitation fugiat et cillum dolor. Lorem anim consequat enim ullamco
      consequat consectetur nisi enim voluptate sit. Tempor qui pariatur id non
      cillum anim incididunt esse ad ipsum sint qui veniam nisi. Reprehenderit
      laborum commodo nisi nostrud in pariatur exercitation. Et sunt deserunt
      consequat quis consequat est anim. Minim qui velit proident fugiat eu
      fugiat est amet dolore nisi reprehenderit. Ullamco et aute cupidatat
      pariatur ea. Irure et ullamco sunt velit cillum duis irure do. Enim ad
      aliqua minim dolore exercitation magna ad exercitation velit qui amet
      culpa. Ullamco nisi occaecat laboris sunt exercitation anim qui proident
      laboris magna veniam sint. In excepteur mollit veniam est Lorem. Aute
      occaecat aliqua veniam est elit labore id dolor. Nulla nostrud consectetur
      do officia culpa adipisicing irure officia deserunt enim consequat
      reprehenderit amet. Esse magna cillum eiusmod incididunt velit est quis ex
      dolor. Elit voluptate irure commodo ex eiusmod ex minim velit officia amet
      proident ullamco. Cupidatat anim minim aliquip officia laborum cillum.
      Commodo et consequat mollit dolore eiusmod veniam amet. Eiusmod non nulla
      velit adipisicing. Anim nisi anim labore consectetur velit proident magna.
      Incididunt culpa culpa adipisicing ullamco. Officia fugiat officia velit
      officia aliqua et. Adipisicing esse ipsum sint fugiat adipisicing amet
      sunt ex quis id minim.
    </p>
  ),
};
