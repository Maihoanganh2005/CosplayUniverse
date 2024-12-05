// src/components/CosplayCard.js
import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/CosplayCard.css";

Modal.setAppElement("#root"); // Đảm bảo modal hoạt động đúng với React

const CosplayCard = ({ cosplay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="cosplay-card">
        <img src={cosplay.image} alt={cosplay.name} />
        <h3>{cosplay.name}</h3>
        <p>{cosplay.description}</p>
        <button onClick={openModal}>View</button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <img src={cosplay.image} alt={cosplay.name} className="modal-image" />
          <h3>{cosplay.name}</h3>
          <p>{cosplay.description}</p>
          <button onClick={toggleLike} className={liked ? "liked" : ""}>
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default CosplayCard;
