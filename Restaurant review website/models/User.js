"use strict";

class User {
constructor(user_id, user_name, password, first_name, last_name, gender, date_of_birth, mobile_number, email_address) {
this.user_id = user_id;
this.user_name = user_name;
this.password = password;
this.first_name = first_name;
this.last_name = last_name;
this.gender = gender;
this.date_of_birth = date_of_birth;
this.mobile_number = mobile_number;
this.email_address = email_address;
}

getUser_id() {
    return this.user_id;
}
getUser_name() {
    return this.user_name;
}
getPassword() {
    return this.password;
}
getFirst_name() {
    return this.first_name;
}
getLast_name() {
    return this.last_name;
}
getGender() {
    return this.gender;
}
getDate_of_birth() {
    return this.date_of_birth;
}
getMobile_number() {
    return this.mobile_number;
}
getEmail_address() {
    return this.email_address;
}

setUser_id(user_id) {
    this.user_id = user_id;
}
setUser_name(user_name) {
    this.user_name = user_name;
}
setPassword(password) {
    this.password = password;
}
setFirst_name(first_name) {
    this.first_name = first_name;
}
setLast_name(last_name) {
    this.last_name = last_name;
}
setGender(gender) {
    this.gender = gender;
}
setDate_of_birth(date_of_birth) {
    this.date_of_birth = date_of_birth;
}
setMobile_number(mobile_number) {
    this.mobile_number = mobile_number;
}
setEmail_address(email_address) {
    this.email_address = email_address;
}

}

module.exports = User;