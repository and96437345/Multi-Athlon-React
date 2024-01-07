export default function Footer() {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <div className="row my-5 justify-content-center">
                <div className="col text-center">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="mb-4">Хочешь взглянуть на результаты своей команды?</h3>
                            </div> 
                            <div className="row justify-content-center">
                                <div className="col-md-4 col">
                                    <p className="small color-text">
                                        Мы покажем вам, как ваша команда может более эффективно соревноваться с  другими командами.
                                    </p>
                                    <button type="button" className="btn btn-primary border-0 my-4">
                                        <b>Посмотреть результаты</b>
                                    </button>
                                    <br />
                                    <img src="https://i.imgur.com/pC6AgYC.jpg" className="img-fluid" width="450"/>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
            <footer >
                
            <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
                <div className="container">
                    <div className="col-12">
                        <div className="row row-2">
                            {/* <div className="col-sm-3 text-md-center"><h5><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span><b>  МультиАтлон</b></h5></div> */}
                            <div className="col-sm-3 my-sm-0 mt-5"><h5><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span><b>  МультиАтлон</b></h5></div>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0">Платформа</li><li>Помощь</li><li>Безопасность</li></ul></div>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0">Участники</li><li>Соревнования</li><li>Лучшие результаты</li></ul></div>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0">Компания</li><li>О нас</li><li>Карьера<span className="Careers"></span></li></ul></div>
                        </div>  
                    </div>
                </div>
                
            </div>
            <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
                <div className="container">
                <div className="col-12">
                        <div className="row my-4 row-1 no-gutters">
                            {/* <div className="col-sm-3 col-auto text-center"><small>&#9400; Web31Kursk</small></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div> */}
                            <div className="col-sm-3 col-auto text-left"><small>&#9400; Web31Kursk</small></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div>
                            <div className="col  my-auto text-md-left  text-right "> <small> multiatlon@yandex.ru <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid "  width="25"/></span> <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid "  width="25"/></span></small>  </div> 
                        </div>
                    </div>
                </div>
                    
                </div>
            </footer>
        </div>
    )
}
