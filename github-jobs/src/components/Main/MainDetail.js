import React from 'react';
import moment from 'moment';

export const MainDetail = ({ jobDetails }) => {

    const { created_at, location } = jobDetails;
    const hoy = new Date();
    
    const fecha1 = moment(created_at);
    const fecha2 = moment(hoy);

    const dias = fecha2.diff(fecha1, 'days');
    const meses = fecha2.diff(fecha1, 'month');

    const locacion = location.split(',')[0];

    return (

        <main className="mDetail__main-descripcion">
            <div className="mDetail__descripcion-info">
                <div className="mDetail__titulo">
                    <div className="mDetail__titulo-tiempo">
                        <h3>{jobDetails.title}</h3>
                        <span>{jobDetails.type}</span>
                    </div>
                    <div className="mDetail__info-icono-titulo">
                        <i className="material-icons md-dark md-inactive">query_builder</i>
                        <p>
                            {   dias === 0 ? 'today' 
                                : dias === 1 ? `${dias} day ago` 
                                : dias > 1 && dias <= 29 ? `${dias} days ago` 
                                : dias === 30 || dias === 31 ? `1 month ago` 
                                : meses === 1 ? `${meses} month ago` 
                                : meses > 1 ? `${meses} months ago` : null
                            }
                        </p>
                    </div>
                </div>
                <div className="mDetail__name-company">
                    <div className="mDetail__job-img m-0 wh-img">
                        <img className="mDetail__job-img-company wh-img" src={jobDetails.company_logo} alt={jobDetails.company_logo} />
                    </div>
                    <div className="mDetail__company-info">
                        <div className="mDetail__company mb-5 fl-1">
                            <span>{jobDetails.company}</span>
                        </div>
                        <div className="mDetail__info-icono-titulo mt-0 w-100">
                            <i className="material-icons md-dark md-inactive">public</i>
                            <p>{locacion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mDetail__texto">
                <p>{jobDetails.description}</p>
            </div>
        </main>

    );

};
