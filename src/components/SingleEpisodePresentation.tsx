import './../scss/main.scss'

function SingleEpisodePresentation() {

    return (
        <>
            <div className='single-episode-presentation-wrapper'>
                <div className='episode-presentation-img'>
                    <img src="/src/assets/img/hablemos-de-gambling-4.png" alt="" />
                </div>
                <div className='episode-presentation-details'>
                    <h2 className='episode-presentation-details__title'>
                        <span>chemichal | june 14, 2023</span>
                        <br />
                        Ep 1: How to build a world-class business brand
                    </h2>
                    <button className='episode-presentation-details__btn'>play now</button>
                    <div className='episode-presentation-details__listen-on'>
                        <div className='episode-presentation-details__listen-on--text'>Or listen on:</div>
                        <div className='episode-presentation-details__listen-on--list'>
                            <img src="/src/assets/img/btn-spotify.png" alt="" />
                            <img src="/src/assets/img/btn-apple-podcast.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEpisodePresentation;
