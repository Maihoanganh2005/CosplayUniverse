import React, { useState, useEffect } from "react";
import { communityData } from "../data/communityData"; // Import dữ liệu cộng đồng
import "../styles/Community.css"; // Import CSS cho cộng đồng

const Community = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Set dữ liệu cộng đồng khi trang được load
    setCommunities(communityData); // Bạn có thể thay thế bằng API nếu cần
  }, []);

  return (
    <div className="community">
      <h2>Cộng đồng Cosplay tại Việt Nam</h2>
      <div className="community-grid">
        {communities.map((community) => (
          <div key={community.id} className="community-card">
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            {/* Hiển thị hình ảnh và liên kết */}
            <a href={community.imageLink} target="_blank" rel="noopener noreferrer">
              <img
                className="community-image"
                src={community.image}
                alt={community.name}
              />
            </a>
            <p>
              Tham gia cộng đồng tại:{" "}
              <a href={community.imageLink} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
