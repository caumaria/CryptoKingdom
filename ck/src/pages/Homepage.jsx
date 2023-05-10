"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      });
  });

  return (
    <div>
      <h1>CRYPTO KINGDOM - API</h1>
    </div>
  );
};

export default Homepage;
