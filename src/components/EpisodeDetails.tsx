import './../scss/main.scss';
import data from './../assets/data/episodes.json';
import parse from "html-react-parser";


function SingleEpisodePresentation(params: any) {

    const { id } = params;
    const episodeDetailData = data.episodes.find( x => x.id === id);

    

    console.log(episodeDetailData);
    

    return (
        <>
            <div className='single-episode-wrapper'>
                <div className='episode-presentation'>
                    <div className='episode-presentation__img'>
                        <img src={`/src/assets/img/episodes/${episodeDetailData?.picture}`} alt="" />
                    </div>
                    <div className='episode-presentation__details'>
                        <h2 className='episode-presentation__details--title'>
                            <span>{episodeDetailData?.date}</span>
                            <br />
                            {episodeDetailData?.title}
                        </h2>
                        <div className='episode-presentation__details--listen-on'>
                            <div className='episode-presentation__details--listen-on-text'>Escuchar en plataformas</div>
                            <div className='episode-presentation__details--listen-on-list'>
                                <a href={episodeDetailData?.links.spotify}>
                                    <img src="/src/assets/img/btn-spotify.png" alt="" />
                                </a>
                                <a href={episodeDetailData?.links.apple_podcast}>
                                    <img src="/src/assets/img/btn-apple-podcast.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview-intro">
                    {parse(episodeDetailData?.description as string)}
                </div>
                <div className="overview-highlight">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at in cumque assumenda, ipsum consectetur error quisquam officia dolores voluptatem dignissimos saepe! Officia quidem totam tempore non nobis officiis doloribus?
                    </p>
                </div>
                <div className="overview-personal">
                    <div className="overview-personal__img-box">
                        <div className="overview-personal__img-box--img">
                            <img src="/src/assets/img/hablemos-de-gambling-7.png" alt="" />
                        </div>
                    </div>
                    <div className="overview-personal__description">
                        <h5>
                            Dario
                            <br />
                            <span>podcaster</span>
                        </h5>
                        <p>Dario es un loco fenomenal que trabaja mucho para poder hacer crecer su marca dentro del gambling con su idea innovadora de los juegos de habilidad.. a veces se enoja cuando pierde al ajedrez con su hermano federico pero el siempre pide revancha, como en la vida</p>
                        <div className="overview-personal__description--icons">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEpisodePresentation;
