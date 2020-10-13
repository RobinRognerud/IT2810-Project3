import React from "react";
import styled from "styled-components";

interface IPlayerCard {
  name: string;
  currencies: Array<String>;
  flagURL: string;
  capital: String;
}

const PlayerCard: React.FC<IPlayerCard> = ({
  name,
  currencies,
  capital,
  flagURL,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{capital}</p>
      <p>{currencies}</p>
      <Flag src={flagURL} alt="Country's flag" />
    </div>
  );
};

const Flag = styled.img`
  max-height: 100px;
  max-width: 200px;
`;

export default PlayerCard;
