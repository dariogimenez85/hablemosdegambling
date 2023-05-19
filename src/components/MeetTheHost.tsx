import './../scss/main.scss'

function MeetTheHost() {

    return (
        <>
            <div className='meet-the-host-wrapper'>
                <div className='meet-host-banner-img'>
                </div>
                <div className='meet-host-content'>
                    <div className='meet-host-content__text'>
                        <h3 className='meet-host-content__text--title'>
                            <span>WANT TO KNOW MORE</span>
                            <br />
                            Meet The Hosts
                        </h3>
                        <div className='meet-host-content__text--p'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas.</p>
                            <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non elit tellus mattis, magna.</p>
                        </div>
                    </div>
                    <div className='meet-host-content__contributors'>
                        <div className='meet-host-content__contributors--item'>
                            <img src="/src/assets/img/hablemos-de-gambling-12.png" alt="" />
                        </div>
                        <div className='meet-host-content__contributors--item'>
                            <img src="/src/assets/img/hablemos-de-gambling-7.png" alt="" />
                        </div>
                        <div className='meet-host-content__contributors--item'>
                            <img src="/src/assets/img/hablemos-de-gambling-9.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetTheHost
