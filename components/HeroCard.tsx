"use client";

import { Movie } from "@/lib/types";
import { baseImgUrl } from "@lib/constants";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";
import Modal from "./Modal";

const HeroCard = ({ movieTrending }: { movieTrending: Movie }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  //   console.log(movieTrending);
  //   console.log(`${baseImgUrl}${movieTrending?.backdrop_path}`);
  return (
    <div className="hero">
      <div className="hero-bg">
        <img
          className="hero-bg-image"
          src={`${baseImgUrl}${
            movieTrending?.backdrop_path || movieTrending?.poster_path
          }`}
          alt="trending movie"
        />
        <div className="overlay"></div>
      </div>
      <h1 className="hero-title">
        {movieTrending?.title || movieTrending?.name}
      </h1>
      <p className="hero-overview">{movieTrending?.overview}</p>
      <div className="hero-btns">
        <button className="hero-btn" onClick={openModal}>
          <PlayCircleOutlineIcon />
          Play Now
        </button>
        <button className="hero-btn" onClick={openModal}>
          <InfoOutlined />
          More Info
        </button>
      </div>
      {showModal && <Modal movie={movieTrending} closeModal={closeModal} />}
    </div>
  );
};

export default HeroCard;
