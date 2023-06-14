import styled from "styled-components";

const Head = styled.div`
  min-width: 200px;
  height: 100vh;
  color: #979595;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #2c2c2c;
  position: fixed;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Center = styled.div`
  margin: 1em 2rem;

  img {
    cursor: pointer;
  }
`;

const Li = styled.li`
  border-radius: 20px;
  padding: 0.4rem 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0.8em 1rem;
  list-style: none;
  color: white;

  :nth-child(1) {
      font-weight: 700;
  }

  &:hover {
    background-color: #27342d;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  margin-top: 30px;
`;

const Header = () => {
  return (
    <Head>
      <Center>
        <img src="logo.svg" alt="logo" style={{ width: 50, height: 50 }} />
      </Center>

      <Ul>
        <Li>• Crypto</Li>
        <Li>Exchanges</Li>
        <Li>NFT</Li>
        <Li>Products</Li>
        <Li>My Portfolio</Li>
        <Li>My Rewards</Li>
      </Ul>
    </Head>
  );
};

export default Header;
