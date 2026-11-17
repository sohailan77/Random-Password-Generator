let input = document.getElementById("password");
let button = document.querySelector(".btn");
let copyBtn = document.querySelector(".copy");
let copyIcon = copyBtn.querySelector("i")

let passwordLength = 10;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

let allChar = upperCase + lowerCase + numbers + specialChars;

let createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  while (passwordLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  input.value = password;
};

button.addEventListener("click", createPassword);

copyBtn.addEventListener("click", async () => {
  if (input.value === "") return;

  await navigator.clipboard.writeText(input.value);

  document.querySelector(".tooltiptext").innerHTML = "Copied!";
  copyIcon.className = "fa-solid fa-check";

  setTimeout(() => {
    document.querySelector(".tooltiptext").innerHTML = "Copy";
    copyIcon.className = "fa-regular fa-copy";
  }, 3000);
});
