import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { makeRequest, getData, errorGetData } from './../redux/actions/jobs';
import { pageIni } from './../redux/actions/pages';
import { BASE_URL } from './../helpers/url';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Principal } from './Principal/Principal';
import { Paginacion } from './Paginacion/Paginacion';
import { Footer } from './Footer/Footer';

export const Home = () => {

    const dispatch = useDispatch();
    const [params, setParams] = useState({});

    useEffect(() => {

        dispatch(makeRequest());

        // Petición General 
        const cancelToken1 = axios.CancelToken.source();

        const fetchData = async () => {

            await axios.get(BASE_URL, {
                cancelToken: cancelToken1.token,
                params: {
                    markdown: true,
                    ...params
                }
            }).then(res => {
                dispatch(getData(res));
            }).catch(e => {
                if (axios.isCancel(e)) return;
                dispatch(errorGetData(e));
            });

        };

        fetchData();

        return () => {
            cancelToken1.cancel();
        };

    }, [dispatch, params]);

    const handleFormDescription = (e) => {
        e.preventDefault();
        if(!params.description) return null;
        handleParamChange(e);
    };

    function handleParamChange(e) {

        const param = e.target.name;
        const value = e.target.value;
        console.log('param: ', param);
        console.log('value: ', value);
        dispatch(pageIni(1));
        setParams(prevParams => {
            return {
                ...prevParams,
                [param]: value
            }
        });

    }

    return (

        <div className="home__contenedor">
            <Header />
            <Hero 
                params={ params }
                handleFormDescription={ handleFormDescription }
                onParamChange={ handleParamChange }
            />
            <Principal 
                params={ params }
                handleFormDescription={ handleFormDescription }
                onParamChange={ handleParamChange }
            />
            <Paginacion />
            <Footer />
        </div>
        
    );

};
