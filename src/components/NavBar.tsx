import './../scss/main.scss'

function NavBar() {

    return (
        <>
            <div className='navbar'>
                <div className='navbar__logo'>
                    <img src="/src/assets/img/logo_HablemosDeGAMBLING.png" alt="" />
                </div>
                <div className='navbar__items'>
                    <a href="/" className='underline-nav-text'>inicio</a>
                    <a href="/#welcome-section" className='underline-nav-text'>nosotros</a>
                    <a href="#episodes" className='underline-nav-text'>epipsodios</a>
                    <a href="#meet-the-host" className='underline-nav-text'>host</a>
                </div>
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                    
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon"></span>
                    </label>
                    
                    <div className="navigation__background"></div>
                    
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <li className="navigation__item"><a href="/" className="navigation__link">Home</a></li>
                            <li className="navigation__item"><a href="/#welcome-section" className="navigation__link">About Us</a></li>
                            <li className="navigation__item"><a href="#meet-the-host" className="navigation__link">Meet The Host</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Packages</a></li>
                            <li className="navigation__item"><a href="/episode/1" className="navigation__link">Episode 1</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar
