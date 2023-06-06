"use client";
import styled from "styled-components";

const FlexPopular = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const Container = styled.div`
  width: 100%;
  margin-left: 2rem;
`;

const Title = styled.h4`
  color: white;
  margin: 1.2rem 0;
  font-size: 1.6rem;
`;

const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 850px) {
    display: block;
  }
`;

const Box = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 33%;
  background: linear-gradient(to right, #26ff93, #26ffe5);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px 3px rgba(40, 124, 157, 0.5);
  }
  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 1rem;
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
  gap: 1rem;
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
  },
];

const Popular = () => {
  return (
    <FlexPopular>
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
    </FlexPopular>
  );
};

export default Popular;
