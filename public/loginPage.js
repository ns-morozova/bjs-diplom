"use strict";
const userForm = new UserForm();
userForm.loginFormCallback = function(data){
    ApiConnector.login(data);
    location.reload();
}
