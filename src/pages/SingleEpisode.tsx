import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SingleEpisodeOverview from "../components/SingleEpisodeOverview";
import SingleEpisodePresentation from "../components/SingleEpisodePresentation";
import "./../scss/main.scss";

function SingleEpisode() {
    return (
    <>
        <div className="single-episode-wrapper">
            <NavBar />
            <SingleEpisodePresentation />
            <SingleEpisodeOverview />
            <Footer />            
        </div>
    </>
    );
}

export default SingleEpisode;
