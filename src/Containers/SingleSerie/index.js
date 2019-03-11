import React, { Component } from 'react';
import '../../assets/Loader/loader.css';

class SingleSeries extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(result => this.setState({ show: result }))
            .catch(error => { return error })
    }
    render() {
        const { show } = this.state;
        console.log(show)

        return (
            <div>
                <h3>SingleSeries</h3>
                {
                    show === null && <p className="loader"></p>
                }
                {
                    show !== null &&
                    <div>
                        <p><b>Name:</b> {show.name} </p>
                        <p><b>Rating:</b> {show.rating.average}</p>
                        <p><b>Summary:</b> {show.summary}</p>
                        <p><img alt="Banner" src={show.image.medium} /></p>
                    </div>
                }


            </div>
        )
    }
}

export default SingleSeries;