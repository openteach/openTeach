// Setup everything for development

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Books } from '../../collections/books.js';



/**
 * This function is made when the server is started in debug mode
 * It sets up:
 */
function debug(){
    try {
        Accounts.createUser({
            username : "test",
            email : "test@example.com",
            password : "test"
        });
    } catch (e) {
        // User was already set up
    }


    // Setup instructor
    // The instructor object resides in a file in a github repository.
    let demoInstructor = {
        courses : [
            {
                url : "git@github.com:openteach/test-course.git",
                base: "/course"
            },
            {
                url : "git@github.com:openteach/test-instructor.git",
                base: "/some-course"
            }
        ]
    }

    // Setup demo content
    let demoCourse = {
        title : "Test Course",
        index : {
            meta : {
                title : "Welcome"
            },
            content : "# This is the frontpage text of the course."
        },
        chapters : [
            {
                meta : {
                    title : "Test lecture 1"
                },
                content : "# Welcome to the First Lecture \nMore text here"
            },
            {
                meta : {
                    title : "Test lecture 2"
                },
                content : "# Welcome to the Second! Lecture \nAlright"
            }
        ]
    };

    Books.schema.validate(demoCourse);
    Books.upsert({title : demoCourse.title}, {$set : demoCourse});
}

// If debug flag is set, run function
Meteor.startup(() => {
    debug();
});
