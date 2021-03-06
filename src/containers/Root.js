import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

class Root extends Component{

    content(){
        return (
            <Router history={this.props.history}>
                {this.props.routes}
            </Router>
        )
    }

    render(){
        console.warn(this.props)
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        {this.content()}
                    </div>
                </Provider>
            </div>
        )
    }
}


Root.propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
}

export default Root