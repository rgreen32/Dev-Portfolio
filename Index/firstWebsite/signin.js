const signin = document.createElement('a');
signin.id = 'signin';
signin.className = "forward";
signin.textContent = 'Sign in';
document.querySelector('#startButton').appendChild(signin);
signin.href = '/signin.html';

const register = document.createElement('a');
register.id = 'register';
register.className = "forward";
register.textContent = 'Register';
document.querySelector('#startButton').appendChild(register);
register.href = '/register.html';