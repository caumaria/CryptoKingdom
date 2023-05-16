"use client";
import Header from "@/components/Header";
import Popular from "@/components/Popular";
import TopHeader from "@/components/TopHeader";
import styled from "styled-components";

const Container = styled.div`
  background-color: #151414;
  display: flex;
`;

export default function Home() {
  return (
    <Container>

      <Header />

      <div>
        <TopHeader />
        <Popular />
      </div>
      
    </Container>
  );
}
