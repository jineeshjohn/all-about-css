import React from "react";
import styled from "styled-components";
import LeftArrow from "./icons/svgs";

const TileButtonSet = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ViewPolicyBooklet = styled.a`
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  padding: 15px 20px;
  // display: flex;
  justify-content: space-between;
  svg {
    transform: rotate(180deg);
  }
  &:hover {
    color: tan;
  }
  &:hover svg path,
  &:hover svg polygon {
    fill: tan;
  }
`;
const App = () => (
  <div>
    <ViewPolicyBooklet target="_blank" href="#">
      <span data-selector="viewPolicyBooklet">View Policy Booklet</span>
      <LeftArrow />
    </ViewPolicyBooklet>
    Hi: : JJ
  </div>
);

export default App;
