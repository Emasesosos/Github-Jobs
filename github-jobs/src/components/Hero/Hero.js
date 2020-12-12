import React from 'react';

export const Hero = ({ params, handleFormDescription, onParamChange }) => {

    return (

        <div className="hero__contenedor">
            <form 
                className="hero__buscador"
                onSubmit={ handleFormDescription }
            >
                <div className="hero__buscador-search">
                    <i className="material-icons md-dark md-inactive hero__wo">work_outline</i>
                    <input 
                        className="hero__search-job" 
                        type="text" 
                        placeholder="Title, companies, expertise or benefits" 
                        onChange={ onParamChange }
                        value={ params.description }
                        name="description"
                    />
                    <button type="submit" className="hero__boton">Search</button>
                </div>
            </form>
        </div>

    );
    
};
