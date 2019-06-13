import React, { Component } from 'react';

import { List, GoBackButton } from '../components';

class Comp extends Component {
    render() {
        return(
            <div>
                <GoBackButton />
                <List />
                <List />
                <List />
                <List />
            </div>
        )
    }
}

export default Comp;