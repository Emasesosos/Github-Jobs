import React from 'react';

export const Aside = () => {

    return (

        <aside className="aside__aside">
            <div className="aside__fulltime">
                <input className="aside__fulltime-checkbox" type="checkbox" />
                <label>Full time</label>
            </div>
            <div className="aside__location">
                <p>LOCATION</p>
                <form className="aside__form-location">
                    <div className="aside__form-location-input">
                        <i className="material-icons md-dark md-inactive aside__public">public</i>
                        <input className="aside__search-location" type="text" placeholder="City, state, zip code or country" />
                    </div>
                </form>
            </div>
            <div className="aside__places">
                <div className="aside__places-search">
                    <input className="aside__checkbox" type="checkbox" />
                    <label>México</label>
                </div>
                <div className="aside__places-search">
                    <input className="aside__checkbox" type="checkbox" />
                    <label>London</label>
                </div>
                <div className="aside__places-search">
                    <input className="aside__checkbox" type="checkbox" />
                    <label>Amsterdam</label>
                </div>
                <div className="aside__places-search">
                    <input className="aside__checkbox" type="checkbox" />
                    <label>New York</label>
                </div>
                <div className="aside__places-search">
                    <input className="aside__checkbox" type="checkbox" />
                    <label>Berlin</label>
                </div>
            </div>
        </aside>

    );

};
