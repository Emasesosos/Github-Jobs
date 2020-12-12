import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from './../Spinner/Spinner';
import { MsjError } from './../MsjError/MsjError';
import { JobCard } from './JobCard';

export const Jobs = () => {

    const state = useSelector(state => state.githubJobs);
    const { jobs, loading, error } = state;
    const paginacion = useSelector(state => state.pageNow);
    const { pagePag, postsPerPage } = paginacion;

    // Get current posts
    const indexOfLastPost = pagePag * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    if(!jobs) return null;
    const currentPost = jobs.slice(indexOfFirstPost, indexOfLastPost);

    return (

        <div className="jobs__contenedor">
            { loading && <Spinner /> }
            { error && <MsjError /> }
            {
                currentPost.map((job, key) => {
                    return <JobCard
                                key={ key }
                                job={ job }
                            />
                })
            }
        </div>
        
    );

};
