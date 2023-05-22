import styled from "styled-components";

const Head = styled.div`
  height: 100vh;
  min-width: 160px;
  background-color: #1c1c1c;
  color: grey;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 0.7rem;
  padding: 1rem .5rem;
  color: white;
  text-transform: uppercase;
`;

const Li = styled.li`
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  margin: 0.8em 1rem;
  list-style: none;

  &:hover {
    background-color: #52e252;
    color: black;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Head>
      <Center>
        <img src="cat.png" alt="logo" style={{ width: 30, height: 30 }} />
        <H1>Crypto Kingdom</H1>
      </Center>
      <ul style={{ marginTop: 30 }}>
        <Li>Crypto</Li>
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
