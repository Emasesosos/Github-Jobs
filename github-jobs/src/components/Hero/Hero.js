import React from 'react';

export const Hero = () => {

    return (

        <div className="hero__contenedor">
            <form action="" className="hero__buscador">
                <div className="hero__buscador-search">
                    <i className="material-icons md-dark md-inactive hero__wo">work_outline</i>
                    <input 
                        className="hero__search-job" 
                        type="text" 
                        placeholder="Title, companies, expertise or benefits" 
                    />
                    <button type="submit" className="hero__boton">Search</button>
                </div>
            </form>
        </div>

    );
    
};
