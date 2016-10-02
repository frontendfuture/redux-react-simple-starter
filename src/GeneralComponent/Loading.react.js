import React, {PropTypes} from 'react';
import Spinner from 'react-spinkit'

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Spinner spinnerName="three-bounce" noFadeIn/>
    </div>);
  }
}

Loading.propTypes = {
};
