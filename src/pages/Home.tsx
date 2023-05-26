import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTheHost from "../components/MeetTheHost";
import NavBar from "../components/NavBar";
import OurEpisodes from "../components/OurEpisodes";
import WelcomeSection from "../components/WelcomeSection";
import WhyListenUs from "../components/WhyListenUs";
import "./../scss/main.scss";

function Home() {
    return (
    <>
        <div className="home-wrapper">
            <NavBar />
            <Header />
            <WelcomeSection />
            <OurEpisodes />
            <MeetTheHost />
            <WhyListenUs />
            <Footer />
        </div>
    </>
    );
}

export default Home;
