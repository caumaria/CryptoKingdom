import styled from "styled-components";

const FlexHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #2c2c2c;
`;

const DivHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  margin: 0 2rem;

  h1 {
    font-weight: 600;
    color: white;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  background-color: #26ff93;
  color: black;
  border-radius: 22px;
  max-width: 12rem;
  padding: .7rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  border-color: transparent;
  box-shadow: 2px 2px 4px 2px rgba(36, 135, 49, 0.2);
  cursor: pointer;
`;

const TopHeader = () => {
  return (
    <FlexHeader>
      <DivHeader>
        <h1>Crypto Tracker</h1>
        <Button>Connect Wallet</Button>
      </DivHeader>
    </FlexHeader>
  );
};

export default TopHeader;
