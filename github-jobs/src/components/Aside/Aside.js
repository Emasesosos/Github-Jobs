import React from 'react';
import { Places } from './Places';

export const Aside = ({ params, handleFormDescription, onParamChange }) => {

    return (

        <aside className="aside__aside">
            <div className="aside__fulltime">
                <input 
                    className="aside__fulltime-checkbox" 
                    type="checkbox" 
                    onChange={ onParamChange }
                    value={ params.full_time }
                    name="full_time"
                />
                <label>Full time</label>
            </div>
            <div className="aside__location">
                <p>LOCATION</p>
                <form 
                    className="aside__form-location"
                    onSubmit={ handleFormDescription }
                >
                    <div className="aside__form-location-input">
                        <i className="material-icons md-dark md-inactive aside__public">public</i>
                        <input 
                            className="aside__search-location" 
                            type="text" 
                            placeholder="City, state, zip code or country" 
                            onChange={ onParamChange }
                            value={ params.location }
                            name="location"
                        />
                    </div>
                </form>
            </div>
            { params.location && <Places params={ params } onParamChange={ onParamChange } />}
        </aside>

    );

};
