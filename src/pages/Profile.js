import React from "react";
import "../styles/Profile.css"; // Đảm bảo có file CSS ở đúng đường dẫn

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Anh Mai</h1>
      <img
        src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/hinh-nen-honkai-star-rail-1.jpg"
        alt="Honkai Star Rail"
        className="profile-image"
      />
      <p>Chào mừng đến với trang cosplay của tôi!</p>
    </div>
  );
};

export default Profile;
