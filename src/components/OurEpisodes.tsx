import './../scss/main.scss'
import data from './../assets/data/episodes.json';
import EpisodeCard from './EpisodeCard'

function OurEpisodes() {

    const listEpisodes = data.episodes.map((episode)=>{
        
        return <EpisodeCard data={episode} />
    }

    )

    return (
        <>
            <div id='episodes' className='episode-wrapper'>
                <h4 className='episode-wrapper__title'>
                    {/* <span>our recent</span> */}
                    Episodes
                </h4>
                <div className='episodes'>
                    {listEpisodes}
                </div>
                {/* <button className='episode-wrapper__btn'>browse more episodes</button> */}
            </div>
        </>
    )
}

export default OurEpisodes
