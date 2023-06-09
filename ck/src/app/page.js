"use client";
import Header from "@/components/Header";
import Popular from "@/components/Popular";
import TopHeader from "@/components/TopHeader";
import Homepage from "@/pages/Homepage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 80rem;
  height: 100vh;
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  margin-left: 200px;

  @media (max-width: 850px) {
    margin-left: 0;
    margin-top: 70px;
  }
`;

export default function Home() {
  return (
    
      <Container>
        <Header />
        <Div>
          <TopHeader />
          <Popular />
          <Homepage />
        </Div>
      </Container>
    
  );
}
