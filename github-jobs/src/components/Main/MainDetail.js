import React from 'react';

export const MainDetail = ({ jobDetails }) => {

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
                        <p>{jobDetails.created_at}</p>
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
                            <p>{jobDetails.location}</p>
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
