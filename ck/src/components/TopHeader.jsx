import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  height: 50px;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
`;

const Button = styled.button`
  background-color: #52e252;
  color: black;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  font-weight: 700;
  border-color: #52e252;
  box-shadow: 2px 2px 4px 2px rgba(36, 135, 49, 0.2);
  cursor: pointer;
`;

const TopHeader = () => {

  return (
    <Div>
      <Button>Connect Wallet</Button>
    </Div>
  );
};

export default TopHeader;
