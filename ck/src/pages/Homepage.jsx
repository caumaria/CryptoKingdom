"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "@/components/Coin";
import styled from "styled-components";

const FlexHome = styled.div`
  display: flex;
`;

const Div = styled.div`
  color: white;
  width: 100%;
  margin: 0 2rem;
`;

const Input = styled.input`
  border-radius: 20px;
  border-color: transparent;
  background-color: rgba(39, 52, 45, 0.5);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  color: white;
  table-layout: fixed;
  color: grey;
  margin: 0 0 .5rem .6rem;

  td {
    width: 160px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const Homepage = () => {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FlexHome>
      <Div>
        <form>
          <Input
            type="text"
            placeholder="Search a currency"
            onChange={handleChange}
          />
        </form>

        <Table>
          <tbody>
            <tr>
              <td style={{textAlign: 'center'}}>Img</td>
              <td>Coin</td>
              <td>Symbol</td>
              <td>Price</td>
              <td>24h%</td>
              <td>MKT cap</td>
            </tr>
          </tbody>
        </Table>

        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </Div>
    </FlexHome>
  );
};

export default Homepage;
