import styled from "styled-components";

const Head = styled.div`
  min-width: 200px;
  height: 100vh;
  color: #979595;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #2c2c2c;

  @media (max-width: 700px) {
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
  margin: 0.8em 1rem;
  list-style: none;

  &:hover {
    background-color: #26ff93;
    color: black;
    font-weight: 700;
    cursor: pointer;

    :nth-child(1) {
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <Head>
      <Center>
        <img src="logo.svg" alt="logo" style={{ width: 50, height: 50 }} />
      </Center>
      <ul style={{ marginTop: 45 }}>
        <Li style={{ fontWeight: 700, background: '#27342d', borderRadius: 20 }}>• Crypto</Li>
        <Li>Exchanges</Li>
        <Li>NFT</Li>
        <Li>Products</Li>
        <Li>My Portfolio</Li>
        <Li>My Rewards</Li>
      </ul>
    </Head>
  );
};

export default Header;
