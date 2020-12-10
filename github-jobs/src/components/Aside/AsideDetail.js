import React from 'react';

export const AsideDetail = () => {

    return (

        <aside className="aDetail__aside-descripcion">
            <div className="aDetail__back">
                <a className="arrow-icono" href="./index.html">
                    <i className="material-icons md-dark md-inactive arrow-ra">arrow_right_alt</i>
                </a>
                <a href="./index.html">
                    <p>Back to search</p>
                </a>
            </div>
            <div className="aDetail__how-apply">
                <h4>HOW TO APPLY</h4>
            </div>
            <div className="aDetail__descripcion-how-apply">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aperiam doloribus.  <span>correo@correo.com.mx</span> & CC
                    <span> correo@correo.com.mx</span>
                </p>
            </div>
        </aside>

    );

};
