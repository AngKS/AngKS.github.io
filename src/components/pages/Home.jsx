import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import "./Home.css"
import "../stylesheets/App.css"

import Panda from '../assets/520x520.png'
import Face from '../assets/face.png'
import Footer from '../footer/Footer';

function Home() {


    const [resume, setResume] = useState(false)
    const [github, setGithub] = useState(false)
    const [gitbook, setGitbook] = useState(false)
    const [about, setAbout] = useState(false)
    const [mail, setMail] = useState(false)
    const [insta, setInsta] = useState(false)

    return (
        <div className='main center-container bg-dark-blue'>

            <section className="layout w-75">
                <a href="https://883cfd62-6e99-490f-b703-525d4ef04458.filesusr.com/ugd/6386d4_684483ed4a0b4bc09bcbc692c322591b.pdf" target='_blank' rel="noreferrer" className="card card-A text-decoration-none gray" onClick={e => setResume(!resume)}>
                    <h3>Résumé</h3>
                </a>
                <div className="card card-B bg-yellow black">
                    <img src={Panda} alt="" className="img-fluid shadow shadow-md thumbnail w-50 mx-auto rounded-circle" />
                    <h1 className="title white">Ang Kah Shin</h1>
                    <span className="text-muted">@AngKS</span>
                </div>
                <a href="https://www.github.com/angks" target="_blank" rel="noreferrer" className="card card-C text-decoration-none gray" onClick={e => setGithub(!github)}>
                    <i class="fab fa-github medium"></i>
                    <span>@AngKS</span>
                </a>
                <a href="https://www.instagram.com/angks123" target="_blank" rel="noreferrer" className="card card-D  text-decoration-none gray" onClick={e => setInsta(!insta)}>
                    <i class="fab fa-instagram medium"></i>
                    <span>@angks123</span>
                </a>
                <a href="https://angks.gitbook.io" target="_blank" rel="noreferrer" className="card card-E text-decoration-none gray">
                    <i class="fab fa-git-square medium" onClick={e => setGitbook(!gitbook)}></i>
                    <span>GitBook</span>
                </a>
                <Link className="card card-F text-decoration-none gray" onClick={e => setAbout(!about)}>
                    {
                        about ?
                            <div className="text-start">
                                <h3>About Me</h3>
                                <p>
                                    I am an aspiring leader who actively seeks out to constantly
                                    learn and apply technology to augment our society.

                                </p>
                                <p>
                                    I have worked on projects that positively impacted the
                                    environment and mentored individuals who are keen on
                                    leadership and learning.
                                </p>
                            </div>
                            : <h3>About Me</h3>
                    }

                </Link>
                <a href="mailto:hellokahshin@gmail.com" className="card card-G text-decoration-none gray">
                    <i class="far fa-envelope medium" onClick={e => setMail(!mail)}></i>
                    <span>Say Hi!</span>
                </a>

            </section>


            <Footer />
        </div>
    );

}

export default Home;