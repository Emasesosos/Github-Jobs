import React from 'react';
import { Header } from '../Header/Header';
import { AsideDetail } from '../Aside/AsideDetail';
import { MainDetail } from '../Main/MainDetail';
import { Footer } from '../Footer/Footer';

export const JobDetail = () => {

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
