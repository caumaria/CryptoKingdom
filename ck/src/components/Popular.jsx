"use client";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  width: 700px;
`;

const Title = styled.h4`
  color: white;
  padding: 1.2rem 1rem;
  font-size: 1.6rem;
`;

const ContainerBox = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Box = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 260px;
  background: linear-gradient(to right, #26ff93, #26ffe5);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px 3px rgba(40, 124, 157, 0.5);
  }

  @media (max-width: 700) {
    display: flexbox;
  }
`;

const TitleBox = styled.h3`
  font-weight: 700;
  margin-bottom: 0.5rem;
  background-color: inherit;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  gap: 20px;
  font-weight: 600;
  line-height: 1.6;
  background-color: inherit;

  p {
    background-color: inherit;
  }
`;

const data = [
  {
    id: 1,
    token: "BNB-BUSD LP",
    porc: 34.2,
    liq: "$9.379.602",
  },
  {
    id: 2,
    token: "USDT-BNB LP",
    porc: 36.4,
    liq: "$9.379.602",
  },
  {
    id: 3,
    token: "ETH-USDT LP",
    porc: 29.1,
    liq: "$9.379.602",
  }
];

const Popular = () => {
  return (
    <Container>
      <Title>Popular Staking Pools</Title>

      <ContainerBox>
        {data.map((info, i) => {
          return (
            <Box key={i}>
              <TitleBox>{info.token} 🔥</TitleBox>

              <Center>
                <p>APR</p>
                <p>{info.porc}%</p>
              </Center>

              <Center>
                <p>Liquidity</p>
                <p>{info.liq}</p>
              </Center>
            </Box>
          );
        })}
      </ContainerBox>
    </Container>
  );
};

export default Popular;
