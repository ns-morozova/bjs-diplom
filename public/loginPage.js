"use strict";

let call = function(f){
    if (f.success) {
        location.reload();
    } else {
        userForm.setLoginErrorMessage(f.error);
    }
}

const userForm = new UserForm();
userForm.loginFormCallback = function(data){
    ApiConnector.login(data, call);
}

let registration = function(f){
    if (f.success) {
        location.reload();
    } else {
        userForm.setRegisterErrorMessage(f.error);
    }
}

userForm.registerFormCallback = function(data){
    ApiConnector.register(data, registration);
}
