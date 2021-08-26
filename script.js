//Array of chars to be selected for the password
let chars = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%^&*()"];

//length of password
var length = 8;

//Checks to see if password should include lower case characters
var lowercase = "yes";

//Checks to see if password should include upper case characters
var uppercase = "yes";

//Checks to see if password should include numeric characters
var numeric = "yes";

//Checks to see if password should include special characters
var special = "yes";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generates password to be shown on screen
function generatePassword(){
  var password = "";
  var charHolder = "";

  checkIfSelected();

  if(numeric == "yes"){
    charHolder += chars[0];
  }

  if(lowercase == "yes"){
    charHolder += chars[1];
  }

  if(uppercase == "yes"){
    charHolder += chars[2];
  }

  if(special == "yes"){
    charHolder += chars[3];
  }


  for (var i = 0; i <= length-1; i++) {
    var randomNumber = Math.floor(Math.random() * charHolder.length);
    password += charHolder.substring(randomNumber, randomNumber +1);
  }

  console.log(lowercase);
  return password;
}

//Ask the user for the length of the password
function generateLength(){
  endCheck = true;
  while(endCheck){
    var lengthPlaceHolder = prompt("Please enter a number between 8-128 characters", "8");
    if(parseInt(lengthPlaceHolder, 10) >= 8 && parseInt(lengthPlaceHolder, 10) <= 128){
      length = parseInt(lengthPlaceHolder, 10);
      endCheck = false;
    }
  }

  return;
}

//Ask the user if they want lower case characters for there password
function generateLowercase(){
  endCheck = true;
  while(endCheck){
    var holder = prompt("Do you want lower case character (Yes/No)", "Yes");
    if(holder.toLocaleLowerCase() == "yes" || holder.toLocaleLowerCase() == "no"){
      lowercase = holder.toLocaleLowerCase();
      endCheck = false;
    }
    else{
      window.alert("Did not enter a Yes or No");
      endCheck = true;
    }
  }

  return;
}

//Ask the user if they want upper case characters for there password
function generateUppercase(){
  endCheck = true;
  while(endCheck){
    var holder = prompt("Do you want upper case character (Yes/No)", "Yes");
    if(holder.toLocaleLowerCase() == "yes" || holder.toLocaleLowerCase() == "no"){
      uppercase = holder.toLocaleLowerCase();
      endCheck = false;
    }
  }

  return;
}

//Ask the user if they want numeric characters for there password
function generateNumeric(){
  endCheck = true;
  while(endCheck){
    var holder = prompt("Do you want a numeric character (Yes/No)", "Yes");
    if(holder.toLocaleLowerCase() == "yes" || holder.toLocaleLowerCase() == "no"){
      numeric = holder.toLocaleLowerCase();
      endCheck = false;
    }
  }

  return;
}

//Ask the user if they want special characters for there password
function generateSpecial(){
  endCheck = true;
  while(endCheck){
    var holder = prompt("Do you want a special character (Yes/No)", "Yes");
    if(holder.toLocaleLowerCase() == "yes" || holder.toLocaleLowerCase() == "no"){
      special = holder.toLocaleLowerCase();
      endCheck = false;
    }
  }

  return;
}

//Checks to see if password has one type of character selector selected
function checkIfSelected(){

  var endCheck = true;

  while(endCheck){
    generateLowercase();
    generateUppercase();
    generateNumeric();
    generateSpecial();

    if(numeric == "no" &&  lowercase == "no" && uppercase == "no" && special == "no"){
      window.alert("One type of Character selector needs to be selected");
      endCheck = true;
    }
    else{
      endCheck = false;
    }
  }
}