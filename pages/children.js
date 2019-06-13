import React, { Component } from 'react';

import { Wrapper, GoBackButton } from '../components';

class Children extends Component {
  render() {
    return(
      <Wrapper> 
        <GoBackButton /> <br />
        This is children page
      </Wrapper>
    )
  }
}

export default Children;