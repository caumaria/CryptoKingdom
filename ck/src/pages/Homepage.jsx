"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "@/components/Coin";
import styled from "styled-components";

const Div = styled.div`
  background-color: #131313;
  color: white;
  margin-inline: auto;
`;

const Input = styled.input`
  background-color: #1c1c1c;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 1rem;
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
      .catch((error) => console.warn(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Div>
      <form>
        <Input
          type="text"
          placeholder="Search a currency"
          onChange={handleChange}
        />
      </form>


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
  );
};

export default Homepage;
