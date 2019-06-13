import React, { Component } from 'react';

class Wrapper extends Component {
    render() {
        return(
            <div>
               child <br />
               {this.props.children}
            </div>
        )
    }
}

export default Wrapper;