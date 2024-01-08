import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="container hero">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center">
                    <Link to="/resultsPage" className='hero-link'>Результаты выступлений спортсменов</Link>
                    </h1>
                    {/* <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="images/hero1.jpg"></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    )
}