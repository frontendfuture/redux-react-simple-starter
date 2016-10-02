import React, {PropTypes} from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

let time = observable(1)

setInterval(function(){
  time++
}, 1000)

@observer
export default class DashboardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

DashboardIndex.propTypes = {
};
