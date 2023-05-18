import './../scss/main.scss'
import MainPodcasts from './MainPodcasts'

function WelcomeSection() {

    return (
        <>
            <div className='welcome-section-wrapper'>
                <div className='welcome-section-wrapper__main-podcasts'>
                    <MainPodcasts />
                </div>
                <div className='welcome'>
                    <div className='welcome__hello'>
                        <h1 className='welcome__hello--title'>
                            <span>WELCOME</span>
                            <br />
                            Hello!
                        </h1>
                        <p className='welcome__hello--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate suscipit laborum amet ipsum labore a error eligendi eius dolores, pariatur mollitia. Facilis assumenda officiis ad nemo in dignissimos modi!</p>
                        <button className='welcome__hello--btn'>Learn More</button>
                    </div>
                    <div className='welcome__content'>
                        <img className='welcome__content--img' src="/src/assets/img/hablemos-de-gambling-3.png" alt="" />
                        <div className='welcome__content--text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit.</p>
                            <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeSection
