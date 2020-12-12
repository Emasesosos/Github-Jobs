import React from 'react';
import { Aside } from '../Aside/Aside';
import { Main } from '../Main/Main';

export const Principal = ({ params, handleFormDescription, onParamChange }) => {

    return (

        <div className="principal__contenedor">
            <Aside 
                params={ params }
                handleFormDescription={ handleFormDescription }
                onParamChange={ onParamChange }
            />
            <Main />
        </div>

    );

};
