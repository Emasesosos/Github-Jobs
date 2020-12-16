import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AsideDetail = ({ createMarkup }) => {

    const { jobDetails } = useSelector(state => state.jobDetails);
    const { how_to_apply } = jobDetails;

    return (

        <aside className="aDetail__aside-descripcion">
            <div className="aDetail__back">
                <Link className="arrow-icono" to="/">
                    <i className="material-icons md-dark md-inactive arrow-ra">arrow_right_alt</i>
                </Link>
                <Link className="arrow-icono" to="/">
                    <p>Back to search</p>
                </Link>
            </div>
            <div className="aDetail__how-apply">
                <h4>HOW TO APPLY</h4>
            </div>
            <div className="aDetail__descripcion-how-apply">
                <div
                    className="htmlText"
                    dangerouslySetInnerHTML={createMarkup(how_to_apply)}
                />
            </div>
        </aside>

    );

};
