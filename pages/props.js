import React, { Component } from 'react';

import { List2,GoBackButton } from '../components'

class Props extends Component {
    render() {
        return(
            <div>
                <GoBackButton />
                <List2 no={1} title="제목" content="내용입니다." />
                <List2 no={2} title="제목" content="내용입니다." />
                <List2 no={3} title="제목" content="내용입니다." />
                <List2 no={4} title="제목" content="내용입니다." />
                <List2 />
            </div>
        )
    }
}

export default Props;