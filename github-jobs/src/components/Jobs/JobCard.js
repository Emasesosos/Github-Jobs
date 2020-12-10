import React from 'react';

export const JobCard = () => {

    return (

        <div className="job__contenedor">
            <div className="job__job-img">
                <img className="job__job-img-company" src="./assets/reactjs.jpg" alt="job" />
            </div>
            <div className="job__job-info-location">
                <div className="job__job-info">
                    <div className="job__company">
                        <span>Kasisto</span>
                    </div>
                    <div className="job__vacancy">
                        <a href="./index2.html">
                            <p>Front-End Software Engineer</p>
                        </a>
                    </div>
                    <div className="job__schedule">
                        <span>Full time</span>
                    </div>
                </div>
                <div className="job__job-location">
                    <div className="job__info-icono">
                        <i className="material-icons md-dark md-inactive">public</i>
                        <p>New York</p>
                    </div>
                    <div className="job__info-icono">
                        <i className="material-icons md-dark md-inactive">query_builder</i>
                        <p>5 days ago</p>
                    </div>
                </div>
            </div>
        </div>

    );

};
