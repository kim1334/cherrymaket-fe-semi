import React from "react";
import styled from "styled-components";

const Layouts = ({ children }) => {
  return (
    <Container>
      <Layout>{children}</Layout>
    </Container>
  );
};

export default Layouts;

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
`;

const Layout = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1050px;
  height: auto;
  padding-top: 30px;
`;
