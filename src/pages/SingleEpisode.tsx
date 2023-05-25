import Footer from "../components/Footer";
import SingleEpisodeOverview from "../components/SingleEpisodeOverview";
import SingleEpisodePresentation from "../components/SingleEpisodePresentation";
import "./../scss/main.scss";

function SingleEpisode() {
    return (
    <>
        <div className="single-episode-wrapper">
            <SingleEpisodePresentation />
            <SingleEpisodeOverview />
            <Footer />            
        </div>
    </>
    );
}

export default SingleEpisode;
