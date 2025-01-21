/* eslint-disable react/prop-types */
const Game = (props) => {
  return (
    <li className="game">
      <img src={props.gameImage} alt={props.gameAlt} className="gameImage" />
    </li>
  );
};

export default Game;
