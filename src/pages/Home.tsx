import Header from "../components/Header";
import NavBar from "../components/NavBar";
import WelcomeSection from "../components/WelcomeSection";
import "./../scss/main.scss";

function Home() {
    return (
    <>
        <div className="home-wrapper">
            <NavBar />
            <Header />
            <WelcomeSection />
        </div>
    </>
    );
}

export default Home;
