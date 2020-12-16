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
            <ul className="paginacion">
                { pagePag !== 1 && <li className="material-icons pag" onClick={ () => handlePageBack(-1)} >keyboard_arrow_left</li> }
                { pagePag !== 1 && <li className="pag" onClick={ () => handlePageIni(1)} >1</li> }
                { pagePag > 2 && <li className="pag" onClick={ () => handlePageBack(-1)} >{pagePag - 1}</li> }
                <li className="pag active">{ pagePag }</li>
                { (pagePag > 2 && pagePag <= pageNumbers.length - 1) && <li className="pag"> . . . </li> }
                { pageNumbers[pagePag] && <li className="pag" onClick={ () => handlePageNext(1)} >{ pagePag + 1  }</li> }
                { pageNumbers[pagePag] && <li className="material-icons paginacion__next pag" onClick={ () => handlePageNext(1)} >keyboard_arrow_right</li> }
            </ul>
        </div>
       

    );

};
