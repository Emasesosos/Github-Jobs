import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import { AsideDetail } from '../Aside/AsideDetail';
import { MainDetail } from '../Main/MainDetail';
import { Footer } from '../Footer/Footer';

export const JobDetail = (props) => {

    const jobId = props.match.params.jobId;
    const state = useSelector(state => state.githubJobs);
    const { jobs } = state;
    if(!jobs) return null;
    const jobDetails = jobs.find(job => job.id === jobId);

    return (

        <div className="home__contenedor">
            <div className="jobDetail__contenedor">
                    <Header />
                    <div className="jobDetail__job-descripcion">
                        <AsideDetail 
                            jobDetails={ jobDetails }
                        />
                        <MainDetail 
                            jobDetails={ jobDetails }
                        />
                    </div>
                    <Footer />
            </div>
        </div>

    );

};
