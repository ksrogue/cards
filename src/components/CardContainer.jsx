/* eslint-disable react/prop-types */
import "./CardContainer.css";
import Game from "./Game";

const CardContainer = (props) => {
  return (
    <main className={`cardContainer ${props.backGround}`}>
      {/* Seção com foto e nome */}
      <section className="profileSection">
        <div className="profileImageContainer">
          <img
            src={props.profileImage}
            alt={props.ProfileAlt}
            className="profileImage"
          />
        </div>
        <h1 className="profileName">{props.name}</h1>
        <span className="profileNick">@{props.nick}</span>
      </section>
      {/* Seção com as imagens dos jogos */}
      <section className="gameSection">
        <h2 className="gameHeader">Jogos Favoritos</h2>
        <ul className="gamesContainer">
          {/* Onde os jogos irão aparecer */}
          <Game gameImage={props.gameImage1} gameAlt={props.gameAlt1} />
          <Game gameImage={props.gameImage2} gameAlt={props.gameAlt2} />
          <Game gameImage={props.gameImage3} gameAlt={props.gameAlt3} />
        </ul>
      </section>
    </main>
  );
};

export default CardContainer;
