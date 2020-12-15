import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

moment.locale('es');

export const JobCard = ({ job }) => {

    console.log(job);

    const { created_at, location, title } = job;
    const hoy = new Date();
    
    const fecha1 = moment(created_at);
    const fecha2 = moment(hoy);

    const dias = fecha2.diff(fecha1, 'days');
    const meses = fecha2.diff(fecha1, 'month');

    const locacion = location.split(',')[0];
    const titulo = (((title.split('–')[0]).split('/')[0]).split('(')[0]).split('-')[0];
    //Software Development Engineer – Backend – AWS Console Platform
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
                        <Link to={`job/${job.id}`}>{titulo}</Link>
                    </div>
                    <div className="job__schedule">
                        <span>{job.type}</span>
                    </div>
                </div>
                <div className="job__job-location">
                    <div className="job__info-country">
                        <i className="material-icons md-dark md-inactive">public</i>
                        <p>{locacion}</p>
                    </div>
                    <div className="job__info-time">
                        <i className="material-icons md-dark md-inactive">query_builder</i>
                        <p>
                            {   dias === 0 ? 'Today' 
                                : dias === 1 ? `${dias} day ago` 
                                : dias > 1 && dias <= 29 ? `${dias} days ago` 
                                : dias === 30 || dias === 31 ? `1 month ago` 
                                : meses === 1 ? `${meses} month ago` 
                                : meses > 1 ? `${meses} months ago` : null
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );

};
