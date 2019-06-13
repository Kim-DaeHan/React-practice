import React, { Component } from 'react';
import Router from 'next/router';

class GoBackButton extends Component {
    render() {
        return(
            <button onClick={Router.back}>뒤로가기</button>
        )
    }
}

export default GoBackButton;