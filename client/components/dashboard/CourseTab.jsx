import React from 'react';
import ListBooks from '../../../imports/features/book/components/ListBooks';

export default class CourseTab extends React.Component {
    componentDidMount() {
        //FlowRouter.go("dashboardRoute", {show : 1});
    }
    render() {
        return (
            <div className="dashboard">
                {this.props.children}
            </div>
        )
    }
}


CourseTab.propTypes = {
    innerComponent : React.PropTypes.object
};

CourseTab.defaultProps = {  };
