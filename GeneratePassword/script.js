const passwordBox = document.getElementById("password");
const lengt = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdeghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "@#$%^&*_()+?><~/.,|";
const allChar = upperCase + lowerCase + symbol + num;
function createPassword() {
  let pass = "";
  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += num[Math.floor(Math.random() * num.length)];
  pass += symbol[Math.floor(Math.random() * symbol.length)];
  while (lengt > pass.length) {
    pass += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = pass;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
