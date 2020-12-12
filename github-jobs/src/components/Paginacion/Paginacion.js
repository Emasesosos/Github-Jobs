import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pagePrev, pageIni, pageNext } from './../../redux/actions/pages';

export const Paginacion = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.githubJobs);
    const state2 = useSelector(state => state.pageNow);
    const { jobs } = state;
    const { pagePag, postsPerPage } = state2;
    if(!jobs) return null;
    const totalPosts = jobs.length;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage ); i++) {
        pageNumbers.push(i);
    }

    const handlePageBack = (amount) => {
        dispatch(pagePrev(amount));
    };

    const handlePageIni = (amount) => {
        dispatch(pageIni(amount));
    };

    const handlePageNext = (amount) => {
        dispatch(pageNext(amount));
    };

    return (
        
        <div className="paginacion__contenedor">
            <ul class="paginacion">
                { pagePag !== 1 && <li onClick={ () => handlePageBack(-1)} >*</li> }
                { pagePag !== 1 && <li onClick={ () => handlePageIni(1)} >1</li> }
                { pagePag > 2 && <li onClick={ () => handlePageBack(-1)} >{pagePag - 1}</li> }
                <li className="active">{ pagePag }</li>
                { (pagePag > 2 && pagePag <= pageNumbers.length - 1) && <li> . . . </li> }
                { pageNumbers[pagePag] && <li onClick={ () => handlePageNext(1)} >{ pagePag + 1  }</li> }
                { pageNumbers[pagePag] && <li onClick={ () => handlePageNext(1)} >*</li> }
            </ul>
        </div>
       

    );

};
