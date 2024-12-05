import React from "react";

const CommunityCard = ({ community }) => {
  return (
    <div className="community-card">
      <h3>{community.name}</h3>
      <p>{community.description}</p>
      <p>{community.members} members</p>
      <a href={community.image} target="_blank" rel="noopener noreferrer">
        Tham gia sự kiện trên Facebook
      </a>
    </div>
  );
};

export default CommunityCard;
