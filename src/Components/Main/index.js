import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../Containers/series'
import SingleSerie from '../../Containers/SingleSerie'

const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Series} />
            <Route exact path="/series/:id" component={SingleSerie} />
        </Switch>
    );
}

export default Main;