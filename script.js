/*============HIDE PASSWORD============*/
const forms = document.querySelector('.forms'),
  pwShowHide = document.querySelectorAll('.eye-icon'),
  kpwShowHide = document.querySelectorAll('.keye-icon'),
  links = document.querySelectorAll('.link');

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password');

    pwFields.forEach((password) => {
      if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.classList.replace('bx-hide', 'bx-show');
        return;
      }
      password.type = 'password';
      eyeIcon.classList.replace('bx-show', 'bx-hide');
    });
  });
});

kpwShowHide.forEach((keyeIcon) => {
  keyeIcon.addEventListener('click', () => {
    let kpwFields = keyeIcon.parentElement.parentElement.querySelectorAll('.kpassword');

    kpwFields.forEach((kpassword) => {
      if (kpassword.type === 'password') {
        kpassword.type = 'text';
        keyeIcon.classList.replace('bx-hide', 'bx-show');
        return;
      }
      kpassword.type = 'password';
      keyeIcon.classList.replace('bx-show', 'bx-hide');
    });
  });
});
/*============HIDE PASSWORD END============*/

/*==========VALIDATE==========*/
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var kpassword = document.forms['form']['kpassword'];

var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');
var kpassword_error = document.getElementById('kpassword_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', password_Verify);
kpassword.addEventListener('textInput', kpassword_Verify);

function vaildated() {
  if (username.value.length < 9) {
    username.style.border = '1px solid red';
    username_error.style.display = 'block';
    return false;
  }
  if (password.value.length < 8) {
    password.style.border = '1px solid red';
    password_error.style.display = 'block';
    password.focus();
    return false;
  }
  if (kpassword.value == password.value) {
    kpassword.style.border = '1px solid red';
    kpassword_error.style.display = 'block';
    kpassword.focus();
    return false;
  }
}
function username_Verify() {
  if (username.value.length >= 8) {
    username.style.border = '1px solid silver';
    username_error.style.display = 'none';
    return true;
  }
}
function password_Verify() {
  if (password.value.length >= 7) {
    password.style.border = '1px solid silver';
    password_error.style.display = 'none';
    return true;
  }
}
function kpassword_Verify() {
  if (kpassword.value.length >= 7) {
    kpassword.style.border = '1px solid silver';
    kpassword_error.style.display = 'none';
    return true;
  }
}
/*==========VALIDATE END==========*/

/*==========CHECK PASSWORD==========*/
function checkPass() {
  var password = document.getElementById('password');
  var kpassword = document.getElementById('kpassword');
  var message = document.getElementById('error-nwl');
  var goodColor = '#66cc66';
  var badColor = '#ff6666';

  if (password.value.length > 7 && kpassword.value.length > 7) {
    password.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = 'Password ok!';

    if (password.value == kpassword.value) {
      kpassword.style.backgroundColor = goodColor;
      message.style.color = goodColor;
      message.innerHTML = 'Ok!';
    } else {
      kpassword.style.backgroundColor = badColor;
      message.style.color = badColor;
      message.innerHTML = ' Passwords Tidak Valid';
    }
  } else {
    password.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = ' Password Minimal 8 Digit!';
  }
}
/*==========CHECK PASSWORD END==========*/

/*==========RESULT==========*/
function check(form) {
  if (form.username.value && form.password.value && form.kpassword.value.length > 7) {
    alert('Login Sukses');
    var username = document.getElementById('username').value;
    document.write('Selamat Datang ' + username).id = 'jstext';
  } else {
    alert('Error Password or Username\n\nUsername minimal 9 huruf!');
  }
}
/*==========RESULT END==========*/
