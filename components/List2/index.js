import React, { Component } from 'react';

class List2 extends Component {
    render() {
        const { no, title, content } = this.props;

        return(
            <div>
                <h3>{no}. {title}</h3>
                <p>{content} </p>
                <hr/>
            </div>
        )
    }
}

export default List2;

List2.defaultProps = {
    no: 0,
    title: '제목없음',
    content: '내용없음',
}