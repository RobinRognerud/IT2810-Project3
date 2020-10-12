import React from "react";

interface IPlayerCard {
  name: string;
}

const PlayerCard: React.FC<IPlayerCard> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age</p>
      <img src="" alt="" />
    </div>
  );
};

export default PlayerCard;
