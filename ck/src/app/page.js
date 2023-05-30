"use client";
import Header from "@/components/Header";
import Popular from "@/components/Popular";
import TopHeader from "@/components/TopHeader";
import Homepage from "@/pages/Homepage";
import styled from "styled-components";

const Container = styled.div`
  background-color: #151414;
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Div = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Header />

      <Div>
        <TopHeader />
        <Homepage />
      </Div>
    </Container>
  );
}
