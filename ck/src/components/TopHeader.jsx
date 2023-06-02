import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  background-color: #1a1a1a;
  border-bottom: 1px solid #2c2c2c;

  h1 {
    margin-left: 2rem;
    font-weight: 600;
    color: white;

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }
  }
`;

const Button = styled.button`
  background-color: #26ff93;
  color: black;
  border-radius: 22px;
  width: 12rem;
  padding: 0.7rem;
  font-weight: 700;
  font-size: 1rem;
  border-color: transparent;
  box-shadow: 2px 2px 4px 2px rgba(36, 135, 49, 0.2);
  cursor: pointer;
`;

const TopHeader = () => {
  return (
    <Div>
      <h1>Crypto Tracker</h1>
      <Button>Connect Wallet</Button>
    </Div>
  );
};

export default TopHeader;
