import React from 'react';
import './index.css';

const SeriesListItem = (props) => {
    return (
        <li>
            {props.series.show.name}
        </li>)
}

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => {
                    return (
                        <SeriesListItem series={series} key={series.show.id} />
                    )
                }
                )}

            </ul>
        </div>
    )
}

export default SeriesList;