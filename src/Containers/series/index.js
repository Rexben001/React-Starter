import React, { Component } from 'react';
import Intro from '../../Components/Intro';
import SeriesList from '../../Components/SeriesList';
import '../../assets/Loader/loader.css';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesListChange = (e) => {
        this.setState({ seriesName: e.target.value, isFetching: true })
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(result => this.setState({ series: result, isFetching: false }))
            .catch(error => { return error })
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <h1>Series container</h1>
                <Intro message="Hello and find all your programs" />

                <div>
                    <input type="text" value={seriesName} onChange={this.onSeriesListChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Pls, type a series name</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series has been found</p>
                }
                {
                    isFetching && <p className="loader"></p>
                }
                < SeriesList list={series} />
            </div >

        )
    }
}

export default Series;