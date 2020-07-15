import * as React from "react";
import { TChirps } from "../utils/types";
import { useHistory } from "react-router-dom";

const Home: React.FC<HomeChirpCardProps> = (props) => {
  const history = useHistory();

  return (
    <div className="col-md-6 mx-1">
      <div
        onClick={() => history.push(`/details/${props.chirp.id}`)}
        className="card my-2 shadow"
      >
        <div className="card-body text-center">
          <h4 className="card-title">{props.chirp.name}</h4>
          <p className="card-text">{props.chirp.content}</p>
        </div>
      </div>
    </div>
  );
};

export interface HomeChirpCardProps {
  chirp: TChirps;
}

export default Home;
