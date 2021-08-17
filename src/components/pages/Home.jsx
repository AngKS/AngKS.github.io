import React, { useState } from 'react';

import "./Home.css"
import "../stylesheets/App.css"

import Panda from '../assets/520x520.png'
import Face from '../assets/face.png'

function Home() {

    const [check, setCheck] = useState(false)
    return (
        <div className='center-container position-relative shadow shadow-md' style={{ 'height': '100vh', 'width': '100%' }}>

            <div className="center-container">
                <section className="layout w-75">
                    <div className="card card-A">
                        A
                    </div>
                    <div className="card card-B">
                        <img src={check ? Face : Panda} alt="" className="img-fluid shadow shadow-md thumbnail w-50 mx-auto rounded-circle" onMouseDown={e => setCheck(!check)} />
                        <h1 className="title">Ang Kah Shin</h1>
                        <span className="text-muted">@AngKS</span>
                    </div>
                    <div className="card card-C">
                        
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

export default Home;