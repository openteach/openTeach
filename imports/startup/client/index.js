import '../common/accounts.js';
import './routes.jsx';
import './routes-users.jsx';

Accounts.onResetPasswordLink(function(token, done){
    console.log(token);
    done();
});
