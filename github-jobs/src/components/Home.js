import React from 'react';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Principal } from './Principal/Principal';
import { Pagination } from './Pagination/Pagination';
import { Footer } from './Footer/Footer';

export const Home = () => {

    return (

        <div className="home__contenedor">
            <Header />
            <Hero />
            <Principal />
            <Pagination />
            <Footer />
        </div>
        
    );

};
