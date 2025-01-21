/* eslint-disable react/prop-types */
export default function Games(props) {
  return (
    <>
      <li className="game-content">
          <img src={props.game1Src} alt={props.game1Alt} />
      </li>
      <li className="game-content">
        <img src={props.game2Src} alt={props.game2Alt} />
    </li>
    <li className="game-content">
        <img src={props.game3Src} alt={props.game3Alt} />
    </li>
    </>
  );
}
