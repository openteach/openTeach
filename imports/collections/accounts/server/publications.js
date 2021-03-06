//Generally we want the user to be able to

// TODO: Security, publish only info

// Publish the user currently in view
Meteor.publish('accounts-instructor-single-user', function(userId) {
    return Meteor.users.find({_id : userId});
});

// Publish all users with a limit
Meteor.publish('accounts-instructor-users', function() {
    if (Roles.userIsInRole(this.userId, ['instructor'], "openteach")) {
        return Meteor.users.find();
    } else {
        // user not authorized. do not publish secrets
        this.stop();
        return;
    }
});

// Publish the instructor
Meteor.publish('accounts-user', function() {
    return Meteor.users.find({isInstructor : true});
});
