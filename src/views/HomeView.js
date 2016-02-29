import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class HomeView extends Component{
    constructor(props){
        super(props)
    }
   
    componentDidMount(){
        this.props.dispatch(actions.getCurrentUser());
    }
    
    render(){
        let { currentUser } = this.props
        console.log(this.props)
        return <div>
            {currentUser.name}
            </div>
    }
}

HomeView.propTypes = {

}

HomeView.defaultProps = {
    currentUser : {}
}

HomeView.state = {

}


function mapStateToProps(state){
    return {
        currentUser: state.user
    }
}

export default connect(mapStateToProps)(HomeView)