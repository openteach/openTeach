import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Instructor from './Instructor.jsx';

export default createContainer((params) => {

    const subscription = Meteor.subscribe('accounts-instructor-users');
    const contractSub = Meteor.subscribe('appr-contract');

    const loading = !subscription.ready() && !contractSub.ready();
    const users = Meteor.users.find().fetch();

    return {
        isInstructor : true,
        loading : loading,
        users: users,
    }
}, Instructor)
