"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "@/components/Coin";
import styled from "styled-components";

const Div = styled.div`
  background-color: #131313;
  color: white;
`;

const Input = styled.input`
  background-color: #1c1c1c;
  border-radius: 20px;
  color: white;
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
        console.log(res.data);
      })
      .catch((error) => console.log(error));
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

      <div>
        <div>Currencies</div>
        

      </div>

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
