import './../scss/main.scss'

function Header() {

    return (
        <>
            <div className='header'>
                <div className='header__content'>
                    <h1 className='header__content--title'>You Are What You Listen</h1>
                    <p className='header__content--description'>Stand out online with a professional website, online store, or portfolio. With iGue, you can turn any idea into a reality</p>
                    <div className='header__content--apps'>
                        <div>
                            <img src="/src/assets/img/btn-spotify.png" alt="" />
                        </div>
                        <div>
                            <img src="/src/assets/img/btn-apple-podcast.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
