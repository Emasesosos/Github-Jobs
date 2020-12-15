import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import { AsideDetail } from '../Aside/AsideDetail';
import { MainDetail } from '../Main/MainDetail';
import { Footer } from '../Footer/Footer';
import { guardarJob } from '../../redux/actions/jobDetail';

export const JobDetail = (props) => {

    const dispatch = useDispatch();

    const jobId = props.match.params.jobId;
    const state = useSelector(state => state.githubJobs);
    const { jobs } = state;
    if(!jobs) return null;
    const findJob = jobs.find(job => job.id === jobId);

    dispatch(guardarJob(findJob));

    return (

        <div className="home__contenedor">
            <div className="jobDetail__contenedor">
                <Header />
                <div className="jobDetail__job-descripcion">
                    <AsideDetail />
                    <MainDetail />
                </div>
                <Footer />   
            </div>
        </div>

    );

};
