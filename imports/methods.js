import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topic } from '../../collections/topics/topics.js';

export const getResponsibleInstructor = new ValidatedMethod({
    name: 'getResponsibleInstructor',

    validate(args) {
        check(args, {});
    },

    run(args) {

    },
});

export const getResponsibleInstructor = new ValidatedMethod({
    name: 'getResponsibleInstructor',

    validate(args) {
        check(args, {
            userId : String
        });
    },

    run({userId}) {
        Roles.addUsersToRoles(userId, ['instructor'], 'openteach');
    },
});
