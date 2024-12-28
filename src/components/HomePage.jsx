import './HomePage.css';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.jpg"

export default function HomePage() {
    
    return (
        <>
            <div className="card text-center mx-5 my-3">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Create A Resume For You</h5>
                    <p className="card-text">
                        Whether you're a student, a fresh graduate, or an experienced professional,<br />
                        a well-crafted resume helps you showcase your skills, achievements, and potential in a way that stands out.<br />
                        Take the first step by creating a resume that reflects the best version of yourself.
                    </p>
                    <a href="/new-portfolio" className="btn btn-primary">Let's Create!</a>
                </div>
            </div>

            <h5 className="mx-5">Other's Resume</h5>
            <a href="/author-portfolio">
                <div className="card mb-3 mx-5 lists" >
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={logo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">Younus</h5>
                                <p className="card-text">
                                    FullStack Developer
                                </p>
                                <span>
                                    <i>View This</i>&nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}
