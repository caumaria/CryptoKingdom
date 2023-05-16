"use client";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 50px;
  width: calc(100vw - 160px);
  background-color: #1a1a1a;
  color: white;
  text-transform: uppercase;
`;

const Button = styled.button`
  background-color: #52e252;
  color: black;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-color: #52e252;
`;

const TopHeader = () => {

  return (
    <Header>
      <Button>Connect Wallet</Button>
    </Header>
  );
};

export default TopHeader;
