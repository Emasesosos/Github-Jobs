import React from 'react';
import { Link } from 'react-router-dom';

export const JobCard = ({ job }) => {

    return (

        <div className="job__contenedor">
            <div className="job__job-img">
                <img className="job__job-img-company" src={job.company_logo} alt={job.company_logo} />
            </div>
            <div className="job__job-info-location">
                <div className="job__job-info">
                    <div className="job__company">
                        <span>{job.company}</span>
                    </div>
                    <div className="job__vacancy">
                        <Link to={`job/${job.id}`}>{job.title}</Link>
                    </div>
                    <div className="job__schedule">
                        <span>Full time</span>
                    </div>
                </div>
                <div className="job__job-location">
                    <div className="job__info-icono">
                        <i className="material-icons md-dark md-inactive">public</i>
                        <p>{job.location}</p>
                    </div>
                    <div className="job__info-icono">
                        <i className="material-icons md-dark md-inactive">query_builder</i>
                        <p>{job.created_at}</p>
                    </div>
                </div>
            </div>
        </div>

    );

};
