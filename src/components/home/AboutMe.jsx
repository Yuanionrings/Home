import React from "react";
import profilePicture from "../resources/yuangao_light.jpg";

const AboutMe = ({ heading, description, resume }) => {

    return(
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0 py-5">
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-5 d-none d-lg-block align-self-center">
                        <img 
                            className="border border-secondary rounded-circle" 
                            src={profilePicture}
                            alt="profilepicture"
                            width={365}
                            height={365}/>
                    </div>

                    <div className={`col-lg`}>
                        <h2 className="display-4 mb-5 text-center">{heading}</h2>
                        <p className="lead text-center">{description}</p>
                        <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href={resume}
                                target="_blank"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Resume/CV"
                            >
                                Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;