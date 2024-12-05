// src/pages/Explore.js
import React, { useState, useEffect } from "react";
import CosplayCard from "../components/CosplayCard";
import { cosplayData } from "../data/cosplayData";
import "../styles/Explore.css";

const Explore = () => {
  const [cosplays, setCosplays] = useState(cosplayData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCosplays(
      cosplayData.filter((cosplay) =>
        cosplay.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="explore">
      <h2>Explore Cosplays</h2>
      <input
        type="text"
        placeholder="Search Cosplays"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="cosplay-grid">
        {cosplays.map((cosplay) => (
          <CosplayCard key={cosplay.id} cosplay={cosplay} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
