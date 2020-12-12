import React from 'react';

export const Places = ({ params, onParamChange }) => {

    return (

        <div className="aside__places">
            <div className="aside__places-search">
                <input 
                    className="aside__checkbox" 
                    type="checkbox" 
                    onChange={ onParamChange }
                    value={ params.location }
                    name="location"
                />
                <label>{ params.location }</label>
            </div>
        </div>

    );

};
