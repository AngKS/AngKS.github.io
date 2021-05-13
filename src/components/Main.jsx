import React from 'react'
import myFace from "./assets/img/IMG_4811.JPG"
import { useState } from 'react'
import INFO from "./assets/information.json"
import Resume from "./assets/Resume.pdf"
import "../App.css"
import Social from './Social'
import logo from "./assets/img/memoji-smile.png"


function Main() {

    const [clicked, setClicked] = useState()


    return (
        <div >
            <div className="position-relative">
                <div className="container_fluid row">

                    <div id="leftCol" className="col-md-4 col-sm-6 fixed-top d-block p-0">
                        <div id="_header" className="">
                            <hr className="d-none d-md-block mt-0" />
                            <a href="#" className="text-decoration-none mx-auto d-flex">
                                <img src={logo} alt="" className="w-25 img-fluid" />
                                <h1 id="Name" className="p-2 Light_Navy my-auto">Ang Kah Shin</h1>
                            </a>
                            <hr />
                        </div>
                        <div className="d-md-block d-none">
                            <nav id="scrollSpyNav" className="mt-4 d-md-inline">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active m-2 p-2 text-dark" href="#section1"><h5>About Me</h5></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-2 text-dark" href="#section2"><h5>Education</h5></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-2 text-dark" href="#section3"><h5>Projects</h5></a>
                                    </li>


                                </ul>
                            </nav>
                            <a href={Resume} className="btn btn-outline-dark m-2" target="_blank">Resume</a>
                            <div className="row m-2">
                                {/* Social Bar */}
                                <hr />
                                <Social />
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 col-sm-6 position-relative offset-md-4">

                        <article id="section1" className="h-100 mt-100 p-3 rounded">
                            <h2 className="Navy">INTRODUCTION</h2>
                            <div className="row d-flex my-3">
                                <div className="col-md-4">
                                    <img src={myFace} className="img-fluid w-100 h-auto filtered" alt="my face" />
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        Hi!🙋‍♂️ I am Kah Shin, a sophomore pursuing a Diploma in Applied AI & Analytics at <a href="sp.edu.sg" className="text-decoration-none Light_Navy">Singapore Polytechnic</a>.
                                    </p>

                                    <p>
                                        I am an aspiring leader who actively seeks out to constantly learn and apply technology to augment our society.
                                        I have worked on projects that positively impacted the environment and mentored individuals who are keen on leadership and learning.
                                    </p>
                                    <a href="mailto:angkahshin@gmail.com" className="btn btn-outline-dark" type="email">Get in touch</a>
                                </div>
                            </div>


                        </article>
                        <article id="section2" className="h-75 mt-100 p-3 rounded">
                            <h2 className="mb-3">Education Background</h2>

                            {
                                INFO.education.map(query => {

                                    return (
                                        <div>
                                            <div className="d-flex">
                                                <h5 className="text-black mr-auto" onClick={() => { setClicked(!clicked) }} data-target={"#" + query.id}>{query.name}</h5>
                                            </div>
                                            <p className={clicked ? "collapse show" : "collapse"} id={query.id}>
                                                {
                                                    query.subjects.map(subject => { return (<li>{subject}</li>) })
                                                }
                                            </p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }

                        </article>
                        <article id="section3" className="h-75">
                            <h2 className="Navy">Projects</h2>
                            <p className="text-muted text-center mt-5">Currently unable to display any projects.</p>
                        </article>

                        <footer className="text-center h-50">
                            <p>What's next?</p>
                            <h2>Get in touch!</h2>
                            <a href="mailto:angkahshin@gmail.com" className="btn btn-outline-dark Lightest_Navy">Say hello</a>

                            <div className="mt-5"><Social /></div>

                            <p className="text-muted">2021 &copy; Created by Kah Shin</p>

                            <a href="#" className="text-decoration-none float-right mx-2 text-dark">
                                <i className="far fa-arrow-up fa-2x " />
                                <p className="rotate mt-5">Go back up.</p>
                            </a>



                        </footer>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main
