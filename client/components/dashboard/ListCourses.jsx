import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Books } from '../../../imports/collections/books.js';

class ListCourses extends React.Component {
    renderCourses() {
        let filteredCourses = this.props.courses;

        return filteredCourses.map((course) => {
            let href = FlowRouter.path("courseRoute", {"courseId" : course._id});
            return (
            <li key={course._id}><a href={href}>{course.title}</a></li>
            );
        });
    }

    render() {
        return (
         <div className="listOfCourses">
          <ul className="listOfCourses__list">
           {this.renderCourses()}
          </ul>
         </div>
        )
    }
}

export default createContainer(
    () => {
        return { courses: Books.find({}).fetch()}
    }, ListCourses);
