import React, { Component } from 'react';

import "./Home.css"
import "../stylesheets/App.css"

class Home extends Component {
    render() {
        return (
            <div className='center-container position-relative shadow shadow-md' style={{'height' : '100vh', 'width' : '100%'}}>
                
            <div className="center-container">
                <section className="layout w-75">
                    <div className="card card-A">
                        A
                    </div>
                    <div className="card card-B">
                        
                    </div>
                    <div className="card card-C">
                        C
                    </div>
                    <div className="card card-D">
                        D
                    </div>
                    <div className="card card-E">
                        E
                    </div>
                    <div className="card card-F">
                        F
                    </div>
                    <div className="card card-G">
                        G
                    </div>
                    <div className="card card-H">
                        H
                    </div>
                </section>
            </div>


            </div>
        );
    }
}

export default Home;