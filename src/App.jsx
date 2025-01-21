import "./App.css";
import CardContainer from "./components/CardContainer";

const App = () => {
  const cardOwners = [
    {
      id: 1,
      profileImage: "/david.jpg",
      name: "David William",
      nick: "ksrogue",
      backGround: "M",
      games: [
        { gameImage: "wowCover.jpg" },
        { gameImage: "dqCover.jpg" },
        { gameImage: "twCover.jpg" },
      ],
    },
    {
      id: 2,
      profileImage: "/giovanna.jpg",
      name: "Giovanna Korisztek",
      nick: "giovannaks",
      backGround: "F",
      games: [
        { gameImage: "dkCover.jpg" },
        { gameImage: "hlCover.jpg" },
        { gameImage: "twCover.jpg" },
      ],
    },
    // {
    //   id: 3,
    //   profileImage: "/david.jpg",
    //   name: "Nicholas Korisztek",
    //   nick: "ksrogue",
    //   backGround: "M",
    //   games: [
    //     { gameImage: "tlouCover.jpeg" },
    //     { gameImage: "bgCover.jpg" },
    //     { gameImage: "kh2Cover.jpg" },
    //   ],
    // },
  ];
  return (
    <div className="app">
      <h1 className="header">CARDS</h1>
      <div className="cardsWrapper">
        {cardOwners.map((owners) => (
          <CardContainer
            key={owners.id}
            profileImage={owners.profileImage}
            profileAlt={owners.name}
            name={owners.name}
            nick={owners.nick}
            backGround={owners.backGround}
            gameImage1={owners.games[0].gameImage}
            gameImage2={owners.games[1].gameImage}
            gameImage3={owners.games[2].gameImage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
