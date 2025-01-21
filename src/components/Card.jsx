/* eslint-disable react/prop-types */
import "../css/card.css";
import Games from "./Games";

export default function Card(props) {
  return (
    <div>
      <main className={`main-component ${props.gender}`}>
        <section className="main-section">
          <img src={props.imgSrc} alt={props.imgAlt} className="card-image" />
          <h1 className="card-name">{props.name}</h1>
        </section>

        <hr className="card-line"></hr>

        <section className="game-component">
          <h2 className="game-name">Jogos Preferidos</h2>
          <ul className="game-list">
            <Games
              game1Src={props.game1Src}
              game2Src={props.game2Src}
              game3Src={props.game3Src}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
