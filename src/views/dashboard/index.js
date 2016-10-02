import React, {PropTypes} from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import AppState from '../../AppState'

@observer
export default class DashboardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    AuthService.getCurrentUser()
  }

  render() {
    return <GC.Loading/>

    return (<div>
      {AppState.user!= null ? 'Logged in': 'not logged in'}
    </div>);
  }
}

DashboardIndex.propTypes = {
};
