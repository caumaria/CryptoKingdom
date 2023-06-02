"use client";
import Header from "@/components/Header";
import Popular from "@/components/Popular";
import TopHeader from "@/components/TopHeader";
import Homepage from "@/pages/Homepage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: auto;
`;

const Div = styled.div`
`;

const Margin = styled.div`
  margin-left: 1rem;
`;

export default function Home() {
  return (
    <Container>
      <Header />

      <Div>
        <TopHeader />

        <Margin>
          <Popular />
          <Homepage />
        </Margin>
      </Div>
    </Container>
  );
}
