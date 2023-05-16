"use client";
import styled from "styled-components";

const Title = styled.h4`
    color: white;
    padding: 1rem;
`;

const ContainerBox = styled.div`
    margin: 0 1rem;
`;

const Box = styled.div`
    border: 1px solid red;
    width: 12rem;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const data = [
    {   
        token: 'BNB-BUSD LP',
        porc: 34.2,
        liq: '$9.379.602'
    },
    {   
        token: 'USDT-BNB LP',
        porc: 36.4,
        liq: '$9.379.602'
    },
    {   
        token: 'ETH-USDT LP',
        porc: 29.1,
        liq: '$9.379.602'
    },
    {   
        token: 'ETH-USDC LP',
        porc: 23,
        liq: '$9.379.602'
    },
];

const Popular = () => {
  return (
    <div>
      <Title>Popular Staking Pools</Title>

      <ContainerBox>
        <Box>
            <div>
                icon + name + foguinho
            </div>

            <Center>
                <div>Nome</div>
                <div>00.0%</div>
            </Center>

            <Center>
                <div>ara ara</div>
                <div>algo</div>
            </Center>
        </Box>

        <div>map 4*</div>

      </ContainerBox>
    </div>

  )
}

export default Popular
