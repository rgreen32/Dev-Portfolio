let userData = [];

let fields = [];

let localField = {
    userName: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: ''

};

const firstName = document.createElement('input');
firstName.name = 'oneName';
firstName.placeholder = 'First Name';
fields.push(firstName);
localField.firstName = firstName;

const lastName = document.createElement('input');
lastName.name = 'twoName';
lastName.placeholder = 'Last Name';
fields.push(lastName);
localField.lastName = lastName;

const userName = document.createElement('input');
userName.name = 'userName';
userName.placeholder = 'Username';
fields.push(userName);
localField.userName = userName;

const password = document.createElement('input');
password.type = 'password';
password.name = 'password';
password.placeholder = 'Password';
fields.push(password);

const passwordConf = document.createElement('input');
passwordConf.type = 'password';
passwordConf.name = 'passwordConf';
passwordConf.placeholder = 'Confirm Password';
fields.push(passwordConf);

const birthDate = document.createElement('input')
birthDate.name = 'age';
birthDate.placeholder = 'Age';
fields.push(birthDate);
localField.birthDate = birthDate;

const email = document.createElement('input');
email.name = 'email';
email.placeholder = 'Email';
fields.push(email);
localField.email = email;

console.log(fields);

runFields(fields);



document.querySelector('#done').addEventListener('submit', function(e){
    e.preventDefault();
    let metaUser = {
        firstName: e.target.elements.oneName.value,
        lastName: e.target.elements.twoName.value,
        birthDate: e.target.elements.age.value,
        email: e.target.elements.email.value,
        username: e.target.elements.userName.value,
        password: e.target.elements.password.value,
        passwordConf: e.target.elements.passwordConf.value,
        userId: uuidv4()
    };
    if (metaUser.firstName !== '') {
    if (metaUser.lastName !== '') {
    if (metaUser.birthDate !== '') {
    if (metaUser.email !== '') {
    if (metaUser.password == metaUser.passwordConf) {
    userData.push(metaUser);
    saveUserData(e, metaUser.userId);
    console.log(userData);
    location.assign('/interests.html')
    }else {noPassword()}
    }else {failure()}
}else {failure()}
}else {failure()}
} else {failure()}
});



