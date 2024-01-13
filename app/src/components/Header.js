import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hero from './Hero';
import ResultsList from './ResultsList';
import RegistrationForm from './RegistrationForm';
import LogIn from './LogIn';
import ResultsPage from './ResultsPage';
import PerfomancesPage from './PerfomancesPage';
import Profile from './Profile';

export default function Header() {
    return (
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><a className="navbar-brand" href="/"><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span>  МультиАтлон</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Санкт-Петербург</a></li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"><span>Выбрать город </span></a>
                                    <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Москва</a><a className="dropdown-item" role="presentation" href="#">Курск</a><a className="dropdown-item" role="presentation" href="#">Бепгород</a></div>
                                </li>
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label for="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" name="search" id="search-field"/></div>
                            </form><span className="navbar-text">
                                <Link to="/registrationForm" className='login'>Регистрация</Link>
                                </span>
                                {/* <a className="btn btn-light action-button" role="button" href="#">
                                    Личный кабинет
                                </a> */}
                                <Link to="/logIn" className='btn btn-light action-button log--button' role="button" >Вход</Link>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' exact element={[<Hero />, <ResultsList />]} />
                    <Route path='/resultsPage' element={<ResultsPage />} />
                    <Route path='/perfomancesPage' element={<PerfomancesPage />} />
                    <Route path='/registrationForm' element={<RegistrationForm />} />
                    <Route path='/logIn' element={<LogIn />}/>
                    <Route path='/profile' element={<Profile />} />
                </Routes>             
            </div>
        </div>
    )
}