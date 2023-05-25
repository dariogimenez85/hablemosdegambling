import './../scss/main.scss'

function WhyListenUs() {

    return (
        <>
            <div className='listen-us-wrapper'>
                <div className='listen-us-wrapper__content'>
                    <h3 className='listen-us-wrapper__content--title'>
                        <span>conocenos</span>
                        <br />
                        ¿Por qué nuestro podcast es especial?
                    </h3>
                    <div className='listen-us-wrapper__content--grid-box'>
                        <div className='listen-us-grid'>
                            <div className='listen-us-grid__item'>
                                <img className='listen-us-grid__item--img' src="/src/assets/img/mic-icon.png" alt="" />
                                <div className='listen-us-grid__item--text'>
                                    <h6>¡En español!</h6>
                                    <p>Primer podcast enfocado en la industria del gambling realizado 100% en español.</p>
                                </div>
                            </div>
                            <div className='listen-us-grid__item'>
                                <img className='listen-us-grid__item--img' src="/src/assets/img/mic-icon.png" alt="" />
                                <div className='listen-us-grid__item--text'>
                                    <h6>Referentes</h6>
                                    <p>Charlamos con los referentes de la industria del juego en LATAM y la región.</p>
                                </div>
                            </div>
                            <div className='listen-us-grid__item'>
                                <img className='listen-us-grid__item--img' src="/src/assets/img/mic-icon.png" alt="" />
                                <div className='listen-us-grid__item--text'>
                                    <h6>Eventos</h6>
                                    <p>Apoyamos las ferias regionales y cubrimos los eventos mas importantes del gambling.</p>
                                </div>
                            </div>
                            <div className='listen-us-grid__item'>
                                <img className='listen-us-grid__item--img' src="/src/assets/img/mic-icon.png" alt="" />
                                <div className='listen-us-grid__item--text'>
                                    <h6>Novedades</h6>
                                    <p>Te mantenemos al tanto de los productos y las empresas mas destacadas que operan en la región.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='listen-us-wrapper__img'>
                    {/* <img src="/src/assets/img/hablemos-de-gambling-12.png" alt="" /> */}
                </div>
            </div>
        </>
    )
}

export default WhyListenUs
