"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "@/components/Coin";
import styled from "styled-components";
import TopHeader from "@/components/TopHeader";

const Container = styled.div`
  background-color: black;
  color: white;
`;

const Header = styled.div`
  height: 100vh;
  width: 140px;
  background-color: #1f1f1f;
`;

const Center = styled.div`
  display: flex;
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
    <Container>
      <TopHeader />
      <Center>
        <Header></Header>
        <div>
          <h1>CRYPTO KINGDOM - API</h1>

          <h2>Search a currency</h2>
          <form>
            <input type="text" placeholder="Search" onChange={handleChange} />
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
        </div>
      </Center>
    </Container>
  );
};

export default Homepage;
