import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import EpisodeDetails from "../components/EpisodeDetails";
import "./../scss/main.scss";
import { useLocation, useParams } from "react-router";

function Episode() {
    // const location = useLocation();
    // const locationSplit = location.pathname.split("/");
    // const id = parseInt(locationSplit[locationSplit.length - 1])
    // console.log(id);

    const params = useParams();
    console.log(params);

    
    return (
    <>
        <div className="episode-section-wrapper">
            <NavBar />
            <EpisodeDetails id={parseInt(params.id as string)} />
            <Footer />            
        </div>
    </>
    );
}

export default Episode;
