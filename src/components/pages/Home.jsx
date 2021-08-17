import React, { useState } from 'react';

import "./Home.css"
import "../stylesheets/App.css"

import Panda from '../assets/520x520.png'
import Face from '../assets/face.png'

function Home() {

    const [check, setCheck] = useState(false)

    const [resume, setResume] = useState(false)
    const [github, setGithub] = useState(false)
    const [gitbook, setGitbook] = useState(false)
    const [about, setAbout] = useState(false)
    const [mail, setMail] = useState(false)
    const [insta, setInsta] = useState(false)

    return (
        <div className='center-container position-relative bg-dark-blue' style={{ 'height': '100vh', 'width': '100%' }}>

            <div className="center-container">
                <section className="layout w-75">
                    <div className="card card-A" onClick={e => setResume(!resume)}>
                        {
                            resume ? <button className="btn bg-yellow white btn-lg">resume</button> : <h3>Résumé</h3>
                        }
                    </div>
                    <div className="card card-B bg-yellow black">
                        <img src={check ? Face : Panda} alt="" className="img-fluid shadow shadow-md thumbnail w-50 mx-auto rounded-circle" />
                        <h1 className="title white">Ang Kah Shin</h1>
                        <span className="text-muted">@AngKS</span>
                    </div>
                    <div className="card card-C" onClick={e => setGithub(!github)}>
                        <i class="fab fa-github medium"></i>
                        <span>@AngKS</span>
                    </div>
                    <div className="card card-D " onClick={e => setInsta(!insta)}>
                        <i class="fab fa-instagram medium"></i>
                        <span>@angks123</span>
                    </div>
                    <div className="card card-E">
                        <i class="fab fa-git-square medium" onClick={e => setGitbook(!gitbook)}></i>
                        <span>GitBook</span>
                    </div>
                    <div className="card card-F" onClick={e => setAbout(!about)}>
                        <h3>About Me</h3>

                    </div>
                    <div className="card card-G">
                        <i class="far fa-envelope medium" onClick={e => setMail(!mail)}></i>
                        <span>Say Hi!</span>
                    </div>
                    
                </section>
            </div>


        </div>
    );

}

export default Home;