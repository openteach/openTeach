import React from 'react';

import Lectures from '../../../imports/features/lectures/components/Lectures/';

export default class LecturesTab extends React.Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardLectures");
        });
    }

    render() {
        return <Lectures />
    }
}
