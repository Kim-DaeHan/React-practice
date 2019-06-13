import React, { Component } from 'react';

import { List2, GoBackButton } from '../components'
import data from '../data.json';

class Iter extends Component {
  render() {

    return (
      <div>
        <GoBackButton />

        {data.map((v, i) => {
          return <List2 key={i} no={i + 1} title={v.title} content={v.content} />;
        })}
      </div>
    )
  }
}

export default Iter;