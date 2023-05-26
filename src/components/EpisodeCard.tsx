import { useNavigate } from "react-router-dom";

function EpisodeCard( data: any ) {
	const nav = useNavigate();
	const buttonHandler = ()=>{
		nav("/episode/" + data.data.id)
	}
	
  return (
    <div className="episode">
      <div className="episode__img">
        <img src={`/src/assets/img/episodes/${data.data.picture}`} alt="" />
      </div>
      <div className="episode__data">
        <span className="episode__data--text">
          {data.data.title}
        </span>
        <span className="episode__data--play-btn" onClick={buttonHandler}>
          <img src="/src/assets/img/icons/play-solid.svg" alt="play" />
        </span>
      </div>
    </div>
  );
}

export default EpisodeCard;
