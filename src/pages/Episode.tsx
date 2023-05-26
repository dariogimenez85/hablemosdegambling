import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import EpisodeDetails from "../components/EpisodeDetails";
import "./../scss/main.scss";

function Episode() {
    return (
    <>
        <div className="episode-section-wrapper">
            <NavBar />
            <EpisodeDetails  />
            <Footer />            
        </div>
    </>
    );
}

export default Episode;
