import Episode from "../components/Episodes";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTheHost from "../components/MeetTheHost";
import WelcomeSection from "../components/WelcomeSection";
import WhyListenUs from "../components/WhyListenUs";
import "./../scss/main.scss";

function Home() {
    return (
    <>
        <div className="home-wrapper">
            <Header />
            <WelcomeSection />
            <Episode />
            <MeetTheHost />
            <WhyListenUs />
            <Footer />
        </div>
    </>
    );
}

export default Home;
