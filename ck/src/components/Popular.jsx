"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h4`
  color: white;
  padding: 1rem;
`;

const ContainerBox = styled.div`
  margin: 0 1rem;
  color: black;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Box = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #2ebf91, #8360c3);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px 3px rgba(40, 124, 157, 0.5);
  }
`;

const TitleBox = styled.h3`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.6;
`;

const data = [
  {
    token: "BNB-BUSD LP",
    porc: 34.2,
    liq: "$9.379.602",
  },
  {
    token: "USDT-BNB LP",
    porc: 36.4,
    liq: "$9.379.602",
  },
  {
    token: "ETH-USDT LP",
    porc: 29.1,
    liq: "$9.379.602",
  },
  {
    token: "ETH-USDC LP",
    porc: 23,
    liq: "$9.379.602",
  },
];

const Popular = () => {
  return (
    <Container>
      <Title>Popular Staking Pools</Title>

      <ContainerBox>
        {data.map((info, i) => {
          return (
            <Box>
              <TitleBox>{info.token} 🔥</TitleBox>

              <Center>
                <div>APR</div>
                <div>{info.porc}%</div>
              </Center>

              <Center>
                <div>Liquidity</div>
                <div>{info.liq}</div>
              </Center>
            </Box>
          );
        })}
      </ContainerBox>
    </Container>
  );
};

export default Popular;
